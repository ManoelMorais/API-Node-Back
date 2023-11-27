import NewsModell from "../models/News.js";

export const createService = (body) => NewsModell.create(body);

export const findALLService = (offset, limit) =>
  NewsModell.find()
    .sort({ _id: -1 })
    .skip(offset)
    .limit(limit)
    .populate("user");

export const countNewsService = () => NewsModell.countDocuments();

export const topNewsService = () =>
  NewsModell.findOne().sort({ _id: -1 }).populate("user");

export const findNewsByIDService = (id) => NewsModell.findById(id).populate("user");

export const SearchByTitleService = (title) =>
  NewsModell.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");
