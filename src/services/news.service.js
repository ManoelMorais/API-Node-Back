import NewsModell from "../models/News.js";

const createService = (body) => NewsModell.create(body);

const findALLService = (offset, limit) =>
  NewsModell.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const countNewsService = () => NewsModell.countDocuments();

const topNewsService = () => NewsModell.findOne().sort({ _id: -1 }).populate("user")

export { createService, findALLService, countNewsService, topNewsService };
