"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.PORT = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_jwt_1 = require("express-jwt");
const jwt = express_jwt_1.expressjwt;
const mongo = require('./storage/mongo');
const router = require('./routes');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
exports.PORT = PORT;
const SECRET = process.env.SECRET || 'noone-should-know';
exports.SECRET = SECRET;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongo.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', jwt({
    secret: SECRET,
    algorithms: ["HS256"]
}).unless({
    path: [
        "/api/users",
        "/api/login"
    ]
}));
app.use('/api', router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map