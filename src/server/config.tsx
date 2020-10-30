/**
 * Configuration
 */
import manifest from "../../public/manifest.json";

/** Whether we're running on a local desktop or on AWS Lambda */
const isLocal = process.env.IS_LOCAL || process.env.IS_OFFLINE;

const config = {
  /** Application Config */
  app: {
    /** Name of the app is loaded from the `manifest.json` */
    TITLE: manifest.short_name,
    /** Theme is also loaded from the `manifest.json` */
    THEME_COLOR: manifest.theme_color,
    /** URL to our public API Gateway endpoint */
    URL: isLocal ? "http://localhost:3000" : String(process.env.APIGATEWAY_URL),
    /** Where the bundled distribution files (`index.js`, `index.css`) are hosted */
    DIST_URL: isLocal ? "http://localhost:8080" : String(process.env.APP_DIST_URL),
    /** Where the contents of the `public` folder are hosted (might be the same as `config.app.DIST_URL`) */
    PUBLIC_URL: isLocal ? "http://localhost:8080" : String(process.env.APP_PUBLIC_URL),
  },
};

export type Config = typeof config;
export default config;
