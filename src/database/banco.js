import mongoose from "mongoose";

const ConnectDataBase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://ManoelMorais:Sda1945bm10.@cluster0.xqvnque.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Banck Connected"))
    .catch((error) => console.log(error));
};

export default ConnectDataBase;
