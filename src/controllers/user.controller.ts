import { db1 } from "..";
import { connections } from "../db";
import { getUserModel } from "../models/user.model";
import { createLogging } from "./logging.controller";

export const getUser = async (req: any, res: any) => {
  const User = getUserModel(connections["db1"] as any);
  // console.info(db1);
  try {
    const users = await User.find();
    createLogging("Get all users");
    res.json(users);
  } catch (error) {
    // @ts-ignore
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req: any, res: any) => {
  const User = getUserModel(connections["db1"] as any);
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    createLogging(`Create a new user: ${JSON.stringify(user)}`);
    res.status(201).json(newUser);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ message: error.message });
  }
};
