const {
    Router
} = require("express");
const {
    createRoles,
    getAllRolres,
    getRolreId,
    updateRoles,
    deleteRoles
} = require('./controller')
const router = new Router();
router.post('/', createRoles)
router.put('/:id', updateRoles)
router.delete('/:id', deleteRoles)
router.get('/', getAllRolres)
router.get('/:id', getRolreId)



module.exports = router;