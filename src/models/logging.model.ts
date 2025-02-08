import mongoose from "mongoose";

const loggingSchema = new mongoose.Schema({
  message: { type: String, required: true },
});

export class Logging {
  private static connection: any = null;
  constructor() {
    if (!Logging.connection) {
      Logging.connection = mongoose.connections?.[1];
    }
  }

  getModel(): mongoose.Model<any> {
    return Logging.connection.model("Logging", loggingSchema);
  }
}
