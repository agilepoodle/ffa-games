/**
 * Configuration
 */
import manifest from "../../public/manifest.json";

/** Whether we're running on a local desktop or on AWS Lambda */
const isLocal = process.env.IS_LOCAL || process.env.IS_OFFLINE;

const config = {
  app: {
    short_title: manifest.short_name,
    title: manifest.name,
    theme_color: manifest.theme_color,
    /** URL to our public API Gateway endpoint */
    url: isLocal ? "http://localhost:3000" : String(process.env.APIGATEWAY_URL),
    /** Where the bundled distribution files (`index.js`, `index.css`) are hosted */
    dist_url: isLocal ? "http://localhost:8080" : String(process.env.APP_DIST_URL),
    /** Where the contents of the `public` folder are hosted (might be the same as `config.app.DIST_URL`) */
    public_url: isLocal ? "http://localhost:8080" : String(process.env.APP_PUBLIC_URL),
  },
  server: {
    /** URL to game listing backend */
    games_url: 'https://59x7zfhx92.execute-api.eu-north-1.amazonaws.com/espa/games?json=true'
  }
};

export type Config = typeof config;
export default config;
