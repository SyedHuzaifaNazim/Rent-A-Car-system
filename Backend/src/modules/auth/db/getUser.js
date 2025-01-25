// import Model from "../models/index.js";
const Model = require("../models/index");

const getUserInfo = async (data) => {
  try {
    const user = await Model.findOne({ email: data.email });
    return user;
  } catch (err) {
    throw err;
  }
};

// export default getUserInfo;
module.exports = getUserInfo;