// import Model from "../models/index.js";
const Model = require("../models/index");

const addUserData = async (data) => {
  try {
    await Model(data).save();
    return await Model.findOne({ email: data.email });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// export default addUserData;
exports.default = addUserData;