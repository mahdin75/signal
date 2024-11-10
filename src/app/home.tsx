import React, { useEffect, useState } from "react";
import "./home.css";
import FoodPreferences from "../components/FoodPreferences";
import { FoodItemType, UserSettingsData } from "../types";
import VegetableImage from "../assets/images/vegetables.jpeg";
import MilkImage from "../assets/images/milk.jpg";
import MeatImage from "../assets/images/meat.jpg";
import GrainsImage from "../assets/images/grains.jpg";
import { getFoodGroupInfo, getServingsForAges } from "../api/Foods";
import { getFamilySettings, getUserSettings } from "../api/Settings";
import { calculateAge, displayFoodsByCategory } from "../utils";

interface User {
  name?: string;
  isMe: boolean;
  foodItems: FoodItemType[];
}

const ImageCovers = {
  vf: VegetableImage,
  mi: MilkImage,
  me: MeatImage,
  gr: GrainsImage,
};

function Home() {
  const [popup, setPopup] = useState("");
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    //Get Servings of All family members, including own user=> We should get servings based on ages
    //We don't need to get all servings from the server which is not efficient so we request that based on the ages of the family members and user

    const user = getUserSettings();
    const familyMembers = getFamilySettings();

    let ages = (familyMembers ?? []).map((member: UserSettingsData) => {
      return calculateAge?.((member as any)?.birthDate);
    });

    ages = [...ages, calculateAge((user as any).birthDate)];

    getServingsForAges(
      (ages as any).filter((a: number | undefined) => a !== undefined)
    ).then((response) => {
      (user as any).isMe = true;
      let users_ = [user, ...(familyMembers ?? [])];
      users_ = users_.map((u) => ({
        ...u,
        age: calculateAge((u as any).birthDate),
      }));

      users_ = users_.map((u_: any) => {
        u_.foodItems = response?.filter(
          (r) =>
            r.age === u_.age &&
            r.gender.toLocaleLowerCase() === u_.gender.toLocaleLowerCase()
        );

        const foodItemsNew = u_.foodItems.map((i: any) => {
          i.foodAmount = i.servings;
          i.foodImg = (
            <img
              alt={i.fgid}
              src={(ImageCovers as any)[i.fgid]}
              onClick={() => {
                getFoodGroupInfo(i.fgid).then((reponse) => {
                  let instruction = `You need to have <b> ${i.foodAmount} Servings </b> of following foods. Before that <b>pay attention to the following directional statement</b>:<br/>`;
                  instruction += reponse.statements
                    .map(
                      (s: Record<string, string | number>, index: number) =>
                        `<br/> ${index + 1} - ${
                          s["directional-statement"]
                        }<br/>`
                    )
                    .join("");

                  instruction +=
                    "<br/><br/> Here you can see each food in its category as well as <b>the amount of each serving:</b><br/><br/>";
                  instruction += displayFoodsByCategory(
                    reponse.groups,
                    reponse.foods
                  );
                  setPopup(instruction);
                });
              }}
            />
          );
          return i;
        });

        u_.foodItems = foodItemsNew;

        return u_;
      });

      setUsers(users_);
    });
  }, []);

  return (
    <>
      <div className={popup.length > 0 ? "home blurred" : "home"}>
        <h2>Food Preferences</h2>
        <div className="preferences">
          {users.map((user: User) => {
            return (
              <div className="user-preferences">
                <h3>{`${user.name} ${user.isMe ? "(My Menu)" : ""}`}</h3>
                <FoodPreferences foodItems={user.foodItems} />
              </div>
            );
          })}
        </div>
      </div>
      {popup.length > 0 && (
        <div className="popup-food-menu">
          <div className="popup-food-menu-header">
            <h3>Food Menu</h3>
            <h3 onClick={() => setPopup("")}>Close</h3>
          </div>
          <div
            className="popup-food-menu-content"
            dangerouslySetInnerHTML={{
              __html: popup,
            }}
          />
        </div>
      )}
    </>
  );
}

export default Home;
