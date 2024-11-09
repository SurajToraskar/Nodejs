const User = require("../models/user");

console.log("Controllers");
async function handleGetAllUsers(req, resp) {
  console.log("get method invoked");
  const allDbUsers = await User.find({});
  return resp.json(allDbUsers);
}

async function handleGetUserById(req, resp) {
  const user = await User.findById(req.params.id);
  if (!user) return resp.status(404).json({ error: "user not found" });
  return resp.send(user);
}

async function handleCreateNewUser(req, resp) {
  const body = req.body;
  console.log(body);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return resp.status(400).json({ message: "all fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(`result: ${result}`);
  return resp.status(200).json({ msg: "success", id: result._id });
}

async function handleUpdateUserById(req, resp) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "KingToraskar" });
  return resp.json({ status: "Updated" });
}

async function handleDeleteUserById(req, resp) {
  await User.findByIdAndDelete(req.params.id);
  return resp.json({ status: "Deleted" });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
