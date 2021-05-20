import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";
import expressAsynceHandler from "express-async-handler";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsynceHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users); //users data will be inserted to user collection from mongodb
    res.send({ createdUsers });
  })
);

export default userRouter;
