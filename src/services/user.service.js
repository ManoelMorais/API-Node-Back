import UserModels from "../models/User.js";

const UserCreateService = (body) => UserModels.create(body);

const findAllService = () => UserModels.find();

const findIDService = (id) => UserModels.findById(id); // esse findByID já vem, não precisa criar

const UpdateService = (
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  UserModels.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

export default {
  UserCreateService,
  findAllService,
  findIDService,
  UpdateService,
};
