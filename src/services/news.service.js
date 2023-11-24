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

export const findNewsByID = (id) => NewsModell.findById(id).populate("user");
