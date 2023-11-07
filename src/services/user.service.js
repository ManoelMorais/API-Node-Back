import UserModels from "../models/User.js";

const UserCreateService = (body) => UserModels.create(body);

const findAllService = () => UserModels.find();

export default {
  UserCreateService,
  findAllService,
};
