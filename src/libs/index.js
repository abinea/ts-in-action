"use strict";
// import './global-lib.js'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
globalLib({ x: 1 });
globalLib.doSomething();
const module_lib_1 = __importDefault(require("./module-lib"));
module_lib_1.default.doSomething();
// import umdLib from './umd-lib'
umdLib.doSomething();
const moment_1 = __importDefault(require("moment"));
moment_1.default.myFunction = () => { };
globalLib.doAnything = () => { };
