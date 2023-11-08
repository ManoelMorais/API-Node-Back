import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  avatar: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const UserModels = mongoose.model("UserModels", UserSchema);

export default UserModels;
