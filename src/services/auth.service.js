import AuthModel from "../models/User.js";
import jwt from "jsonwebtoken";

const LoginService = (email) =>
  AuthModel.findOne({ email: email }).select("+password");

const gerenateToken = (id, email) =>
  jwt.sign({ id: id, email: email }, process.env.JWT, { expiresIn: 86400 });

export { LoginService, gerenateToken };
