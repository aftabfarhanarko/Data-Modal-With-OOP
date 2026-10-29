const  express =  require('express');
const router =  express.Router();
const {allUserGet,singleUser}  = require('../controllers/userControllers');

router.get('/',  allUserGet);
router.get('/:id', singleUser)

module.exports = router;