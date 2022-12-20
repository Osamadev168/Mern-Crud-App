import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  city: String,
});

const userModel = mongoose.model("user", UserSchema);

export default userModel;
