const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user");
const router = express.Router();

console.log("Routes");
router.get("/", handleGetAllUsers);

router.post("/", handleCreateNewUser);

router.get("/:id", handleGetUserById);

router.patch("/:id", handleUpdateUserById);

router.delete("/:id", handleDeleteUserById);

module.exports = router;
