import { createService, findALLService } from "../services/news.service.js";

const NewsCreate = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      return res
        .status(400)
        .send({ message: "Submit all fields for registration" });
    }

    await createService({
      title,
      text,
      banner,
      user: { _id: "654bac218e22e30eea81eb23" },
    });

    res.send(201);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

const NewsAll = async (req, res) => {
  try {
    const news = await findALLService();

    if (news.length === 0) {
      return res.status(400).send({
        message: "There are no registered news",
      });
    }

    res.send(news);
  } catch (e) {
    return res.status(404).send(e.message);
  }
};

export { NewsCreate, NewsAll };
