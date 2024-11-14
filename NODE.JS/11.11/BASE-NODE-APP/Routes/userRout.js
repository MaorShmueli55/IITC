const express = require(`express`)
const {createUser , findUserById, findAllUser, deleteUser, updateUser} = require(`../controller/userController.js`)

const router = express.Router();

router.post("/" , createUser);

router.get("/:id" , findUserById);

router.get("/" , findAllUser);

router.delete("/:id" , deleteUser);

router.patch("/:id" , updateUser);

module.exports = router