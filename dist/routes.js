"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./users/controllers/user");
const router = express_1.default.Router();
router.post('/users', user_1.signUp);
router.post('/login', user_1.login);
router.post('/test', user_1.test);
/*router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)*/
module.exports = router;
//# sourceMappingURL=routes.js.map