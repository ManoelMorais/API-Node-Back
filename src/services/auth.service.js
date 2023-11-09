import AuthModel from "../models/User.js";

const LoginService = (email) =>
  AuthModel.findOne({ email: email }).select("+password");

export { LoginService };
