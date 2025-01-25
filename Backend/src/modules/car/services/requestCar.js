// import requestCarUpdate from "../db/requestCar.js";
const requestCarUpdate = require("../db/requestCar.js");

const requestCarService = async (carID, username, email) => {
  return await requestCarUpdate(carID, username, email);
};

// export default requestCarService;
exports.default = requestCarService;