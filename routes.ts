import express from "express"

import {signUp, login, test} from './users/controllers/user'

const router = express.Router()

router.post('/users', signUp)
router.post('/login', login)
router.post('/test', test)
/*router.put('/movie/:id', MovieCtrl.updateMovie)
router.delete('/movie/:id', MovieCtrl.deleteMovie)
router.get('/movie/:id', MovieCtrl.getMovieById)
router.get('/movies', MovieCtrl.getMovies)*/

module.exports = router