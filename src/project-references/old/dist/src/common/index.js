"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
function getTime() {
    var time = new Date();
    return "".concat(time.getFullYear(), "-").concat(time.getMonth() + 1, "-").concat(time.getDate());
}
exports.getTime = getTime;
