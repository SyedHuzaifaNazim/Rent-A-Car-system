// import getUser from "../services/getUser.js";
const getUser = require("../services/getUser");

const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.user);

    res.status(200).send({
      user,
    });
  } catch (err) {
    res.send({ error: "An error occurred while fetching user details" });
  }
};

// export default getUserController;
module.exports = getUserController;