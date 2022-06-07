"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/rich-text-editor.cjs.production.js");
} else {
  module.exports = require("./dist/rich-text-editor.cjs.development.js");
}
