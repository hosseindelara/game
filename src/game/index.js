const {
    Router
} = require("express");
const {
    createGame,
    getAllGame,
    getGameId
} = require('./controller')
const router = new Router();
router.post('/', createGame)
router.get('/', getAllGame)
router.get('/:id', getGameId)



module.exports = router;