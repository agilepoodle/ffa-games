import { Config } from "./config";
import { Stats } from "./types";

/**
 * This HTML file acts as a template that we insert all our generated
 * application code into before sending it to the client as regular HTML.
 * Note we're returning a template string from this function.
 */
const html = ({ stats, content, config }: { stats: Stats; content: string; config: Config }): string => `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="${config.app.theme_color}" />
      <title>${config.app.title}</title>
      <link rel="manifest" href="${config.app.public_url}/manifest.json" />
      <link rel="shortcut icon" href="${config.app.public_url}/favicon.ico" />
      <link rel="stylesheet" href="${config.app.dist_url}/${stats.css}" />
      <script>
        window.__CONFIG__ = ${JSON.stringify(config)};
      </script>
    </head>
    <body style="background-color: #e1e2e1;">
      <div id="root">${content}</div>
      <script src="${config.app.dist_url}/${stats.main}"></script>
    </body>
  </html>`;

export default html;
