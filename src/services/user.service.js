import UserModels from "../models/User.js";

const UserCreate = (body) => UserModels.create(body)

export default {
    UserCreate,
}
