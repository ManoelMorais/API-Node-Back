import mongoose from "mongoose";

const ConnectDataBase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect( process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Banck Connected"))
    .catch((error) => console.log(error));
};

export default ConnectDataBase;
