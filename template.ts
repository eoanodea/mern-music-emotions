export default (html: String, css: String) => {
    return `<!doctype html>
      <html lang="en" style="scroll-behavior: smooth;">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>MERN Music Emotion App</title>
          <style>
              a{
                text-decoration: none
              }
          </style>
        </head>
        <body style="margin:0;">
          <div id="root" style="overflow: hidden;">${html}</div>
          <style id="jss-server-side">${css}</style>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}