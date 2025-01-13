import { Model } from "mongoose";

const getUserInfo = async (data) => {
    try {
      const user = await Model.findOne({ email: data.email });
      return user;
    } catch (err) {
      throw err;
    }
  };
  
  export default getUserInfo;