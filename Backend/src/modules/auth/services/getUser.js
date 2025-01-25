// import getUserInfo from "../db/getUser.js";
const getUserInfo = require("../db/getUser");

const getUser = async (data) => {
  return await getUserInfo(data);
};

// export default getUser;
module.exports = getUser;