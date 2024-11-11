import { ConfigsType } from "./types";

const PRODUCTION_MODE = true;

const LOCAL = { BASE_URL: ``, BASE_PATH: `signal`, BASE_PATH_DATA: `` };

const DEPLOYED = {
  BASE_URL: `https://mahdin75.github.io/signal`,
  BASE_PATH: `signal`,
  BASE_PATH_DATA: `/signal`,
};

let CONFIGS: ConfigsType = LOCAL;

if (PRODUCTION_MODE) {
  CONFIGS = DEPLOYED;
}

export { CONFIGS };
