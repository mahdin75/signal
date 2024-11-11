import { ConfigsType } from "./types";

const PRODUCTION_MODE = false;

const LOCAL = {
  BASE_URL: `http://localhost:3000`,
  BASE_PATH: ``,
  BASE_PATH_DATA: ``,
};

const DEPLOYED = {
  BASE_URL: `https://mahdin75.github.io`,
  BASE_PATH: `signal/`,
  BASE_PATH_DATA: `/signal`,
};

let CONFIGS: ConfigsType = LOCAL;

if (PRODUCTION_MODE) {
  CONFIGS = DEPLOYED;
}

export { CONFIGS };
