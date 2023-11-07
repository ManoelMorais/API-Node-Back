import userService from "../services/user.service.js";
import mongoose from "mongoose"

const UserCreate = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.UserCreateService(req.body); // infors que vem do banco

    if (!user) {
      returnres.status(400).send({ message: "Error creating User" });
    }

    res.status(201).send({
      message: "User created successfully",
      user: {
        id: user._id, //criador de id
        name,
        username,
        email,
        avatar,
        background,
      },
    });
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const UserAll = async (req, res) => {
  try {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "There are no registered users" });
    }

    res.send(users);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const UserID = async (req, res) => {
  try {
    const id = req.params.id; //pega o id, 01 verificador

    if(!mongoose.Types.ObjectId.isValid(id)){ //varifica o id no bando  01 verificador
      return res.status(400).send({ message: "Invalid id"})
    }

    const user = await userService.findIDService(id); //verifica o id que esta sendo passado no bando de dados, 02 verificador

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};
export default {
  UserCreate,
  UserAll,
  UserID,
};
