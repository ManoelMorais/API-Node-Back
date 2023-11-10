import NewsModell from "../models/News.js";

const createService = (body) => NewsModell.create(body);

const findALLService = () => NewsModell.find()

export {
    createService,
    findALLService,
}