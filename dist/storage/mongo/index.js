"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect('mongodb://root:example@127.0.0.1:27017/users?authSource=admin')
    .catch(e => {
    console.error('Connection error', e.message);
});
const db = mongoose_1.default.connection;
module.exports = db;
//# sourceMappingURL=index.js.map