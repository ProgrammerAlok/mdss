import mongoose from "mongoose";
import { connections } from "../db";
import { Logging } from "../models/logging.model";

export const getLogging = async (req: any, res: any) => {
  // const Logging = getLoggingModel(mongoose.connections?.[1] as any);
  try {
    const LoggingModel = new Logging().getModel();
    const logs = await LoggingModel.find({});
    res.json(logs);
  } catch (error) {
    console.info(error);
    // @ts-ignore
    res.status(500).json({ message: error.message });
  }
};

export const createLogging = async (message: string) => {
  try {
    const LoggingModel = new Logging().getModel();
    await LoggingModel.create({ message });
  } catch (error) {
    console.info(error);
  }
};
