import mongoose from "mongoose";

const loggingSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

export const getLoggingModel = (db: any) => {
  // console.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // console.info(db);
  // console.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  return db.model("Logging", loggingSchema);
};

export const Logging = mongoose.connections?.[0]?.model(
  "Logging",
  loggingSchema
);
