import mongoose from "mongoose";

export const Connection = (username, password) => {
  mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.5illgl0.mongodb.net/?retryWrites=true&w=majority`,
    () => {
      console.log("Database is successfully connected!");
    }
  );
};
