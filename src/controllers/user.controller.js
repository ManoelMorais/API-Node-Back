import userService from "../services/user.service.js";

const UserCreate = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Submit all fields for registration" });
    }

    const user = await userService.UserCreate(req.body); // infors que vem do banco

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

export default {
  UserCreate,
};
