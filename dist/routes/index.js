"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

const routes = (0, _express.Router)();
routes.get('/test', async (request, response) => {
  return response.json({
    message: 'hello'
  });
});
var _default = routes;
exports.default = _default;