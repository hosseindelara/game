const {
    Router
} = require("express");
const {
    createCity,
    getAllCity,
    getstateID,
    getCityId
} = require('./controller')
const router = new Router();
router.get('/state/:id', getstateID)
router.post('/', createCity)
router.get('/', getAllCity)
router.get('/:id', getCityId)



module.exports = router;