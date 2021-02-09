import React from "react";

import manifest from "../../../public/manifest.json";
import { Config } from "../../server/config";

const ConfigContext = React.createContext<Config>({
  app: {
    short_title: `${manifest.short_name} Mock`,
    title: `${manifest.name} Mock`,
    theme_color: manifest.theme_color,
    url: "http://localhost:3000",
    dist_url: "http://localhost:8080",
    public_url: "http://localhost:8080"
  },
  server: {
    games_url: 'https://59x7zfhx92.execute-api.eu-north-1.amazonaws.com/espa/games'
  }
});

export default ConfigContext;
