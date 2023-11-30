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

export const findNewsByIDService = (id) =>
  NewsModell.findById(id).populate("user");

export const SearchByTitleService = (title) =>
  NewsModell.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

export const NewsByUserService = (id) =>
  NewsModell.find({ user: id }).sort({ _id: -1 }).populate("user");

export const NewsUpdateService = (id, title, text, banner) =>
  NewsModell.findOneAndUpdate(
    { _id: id },
    { title, text, banner },
    {
      rawResult: true,
    }
  );

export const NewsDeleteService = (id) =>
  NewsModell.findOneAndDelete({ _id: id });

export const LikeNewsService = (idNews, userId) =>
  NewsModell.findOneAndUpdate(
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    { $push: { likes: { userId, created: new Date() } } }
  );

export const LikeNewsDeleteService = (idNews, userId) =>
  NewsModell.findOneAndUpdate(
    { _id: idNews },
    { $pull: { likes: { userId } } }
  );

export const NewsCommentService = (idNews, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);

  return NewsModell.findOneAndUpdate(
    { _id: idNews },
    {
      $push: {
        comments: { idComment, userId, comment, createdAt: new Date() },
      },
    }
  );
};

export const NewsCommentDeleteService = (idPost, idComment, userId) =>
  NewsModell.findOneAndUpdate(
    { _id: idPost },
    { $pull: { comments: { idComment, userId } } }
  );
