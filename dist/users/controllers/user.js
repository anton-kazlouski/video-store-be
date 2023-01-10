"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.login = exports.signUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const password_1 = require("../password");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("../../index");
const signUp = (req, res) => {
    const body = req.body;
    function createUser(body) {
        const user = new user_1.default(body);
        if (!user) {
            return res.status(400);
        }
        user.save().then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'Signup completed',
            });
        }).catch(error => {
            return res.status(400).json({ error });
        });
    }
    (0, password_1.hashPassword)(body.password).then(hash => {
        body.password = hash;
        createUser(body);
    });
};
exports.signUp = signUp;
const login = (req, res) => {
    const body = req.body;
    const user = user_1.default.findOne({ 'username': body['email'] }, function (err, user) {
        if (!err) {
            (0, password_1.verifyPassword)(body.password, user.password, (err, isValid) => {
                if (isValid) {
                    const token = jsonwebtoken_1.default.sign(user.email, index_1.SECRET);
                    return res.status(200).json(token);
                }
                return res.status(400).json(err);
            });
        }
    });
};
exports.login = login;
const test = (req, res) => {
    console.log(req.body);
    return res.status(200).json({});
};
exports.test = test;
//# sourceMappingURL=user.js.map