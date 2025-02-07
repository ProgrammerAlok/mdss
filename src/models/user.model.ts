import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const getUserModel = (db: any) => {
  // console.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  // console.info(db);
  // console.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  return db.model("User", userSchema);
};
