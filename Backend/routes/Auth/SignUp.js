
"use strict"

const router = require("express").Router()

const {AddUser , AllUser , EditUser , DeleteUser} = require('../../Controller/AddUser.controller')

router.post('/adduser', AddUser)
router.post('/alluser', AllUser)
router.post('/edit/user', EditUser)
router.post('/delet/user', DeleteUser)


module.exports = router;




 







