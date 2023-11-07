import UserModels from "../models/User.js";

const UserCreateService = (body) => UserModels.create(body);

const findAllService = () => UserModels.find();

const findIDService = (id) => UserModels.findById(id); // esse findByID já vem, não precisa criar

export default {
  UserCreateService,
  findAllService,
  findIDService,
};
