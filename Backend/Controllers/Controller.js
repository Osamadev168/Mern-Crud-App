import { response } from "express";
import userModel from "../Models/User.js";

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(409).json({
      message: e.message,
    });
  }
};
const addUser = async (req, res) => {
  try {
    const user = req.body;
    const addNewUser = new userModel(user);
    await addNewUser.save();
    res.status(201).json(addNewUser);
  } catch (e) {
    res.status(409).json({
      message: e.message,
    });
  }
};
const editUser = async (req, res) => {
  try {
    const user = req.body;
    const editUser = new userModel(user);
    await userModel.updateOne({ _id: req.params.id }, editUser);
    res.status(200).json(editUser);
  } catch (e) {
    console.log(e);
  }
};
const getUserById = async (req, res) => {
  try {
    const getUserById = await userModel.findById(req.params.id);
    res.status(200).json(getUserById);
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
};
const deleteUser = async (req, res) => {
  try {
    await userModel.deleteOne({ _id: req.params.id });
    res.status(202).json("Deleted");
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
export { getUsers, addUser, getUserById, editUser, deleteUser };
