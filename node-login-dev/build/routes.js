"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const express_1 = require("express");
const routes_1 = __importDefault(require("@app/Auth/routes"));
const routes = (0, express_1.Router)();
routes.use(routes_1.default);
exports.default = routes;
