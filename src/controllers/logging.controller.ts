import { db2 } from "..";
import { connections } from "../db";
import { getLoggingModel } from "../models/logging.model";

export const getLogging = async (req: any, res: any) => {
  const Logging = getLoggingModel(connections["db2"] as any);
  try {
    const logs = await Logging.find();
    res.json(logs);
  } catch (error) {
    // @ts-ignore
    res.status(500).json({ message: error.message });
  }
};

export const createLogging = async (message: string) => {
  const Logging = getLoggingModel(connections["db2"] as any);
  const log = new Logging({ message });
  await log.save();
};
