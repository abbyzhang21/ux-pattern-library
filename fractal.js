"use strict";

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = (module.exports = require("@frctl/fractal").create());

/* Set the title of the project */
fractal.set("project.title", "UI - Collection");

/* Tell Fractal where the components will live */
fractal.components.set("path", __dirname + "/components");
// fractal.components.set("ext", ".html");

/* Tell Fractal where the documentation pages will live */
fractal.docs.set("path", __dirname + "/docs");
fractal.web.set("static.path", __dirname + "/public");
