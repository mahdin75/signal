import React from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import LogoutIcon from "./assets/icons/logout.png";
import CallIcon from "./assets/icons/phonecall.png";
import LightModeIcon from "./assets/icons/light_mode.png";
import HomeIconDark from "./assets/icons/home_dark.png";
import HomeIconLight from "./assets/icons/home_light.png";
import SettingsIconDark from "./assets/icons/settings_dark.png";
import SettingsIconLight from "./assets/icons/settings_light.png";
import Genericavatar from "./assets/icons/genericavatar.png";
import Home from "./app/Home";
import Settings from "./app/Settings";
import Login from "./app/Login";
import Register from "./app/Register";

interface User {
  name?: string;
}

function App(user: User) {
  return (
    <Router>
      <div className="App">
        <div className="main">
          <div className="navbar">
            <div className="left-col">
              <div className="icon">
                <img alt="logout" src={LogoutIcon} />
                <span>Logout</span>
              </div>
            </div>
            <div className="right-col">
              <div className="icon">
                <img alt="Support" src={CallIcon} />
                <span>Support</span>
              </div>
              <div className="icon">
                <img alt="Dark Mode" src={LightModeIcon} />
                <span>Dark Mode</span>
              </div>
              <div className="icon">12 July, 2024</div>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <div className="right-menu">
          <div className="avatar-container">
            <div className="avatar">
              <img alt="avatar" src={Genericavatar} />
              <h3>Hello {user?.name ?? "Mahdi"}!</h3>
            </div>
          </div>

          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-link" : "menu-link"
                }
              >
                <div className="rhombus"></div>
                {
                  <img
                    className="menu-link-icon-dark"
                    alt="Home"
                    src={HomeIconDark}
                  />
                }
                {
                  <img
                    className="menu-link-icon-light"
                    alt="Home"
                    src={HomeIconLight}
                  />
                }
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? "active-link" : "menu-link"
                }
              >
                <div className="rhombus"></div>
                {
                  <img
                    className="menu-link-icon-dark"
                    alt="settings"
                    src={SettingsIconDark}
                  />
                }
                {
                  <img
                    className="menu-link-icon-light"
                    alt="settings"
                    src={SettingsIconLight}
                  />
                }
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
