import userService from "../services/user.service.js";

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
    // essa função esta sendo passada nos middlewares
    const user = req.user; // sofreu alterações pois agora ele esta sendo passado pelo middlewares

    res.send(user);
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const UserUpdate = async (req, res) => {
  try {
    // boa parte da função esta sendo passada nos middlewares
    const { name, username, email, password, avatar, background } = req.body;
    
    if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Submit at least one fields for update" });
    }
    const {id, user} = req; // sofreu alterações pois agora ele esta sendo passado pelo middlewares


    await userService.UpdateService(
      id,
      name,
      username,
      email,
      avatar,
      background
    )

    res.send({ message: "User successfully updated!"})
  } catch (e) {
    return res.status(400).send(e.message)
  }
}
export default {
  UserCreate,
  UserAll,
  UserID,
  UserUpdate,
};
