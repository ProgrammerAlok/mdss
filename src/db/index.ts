import mongoose from "mongoose";

export const connections: any = {};

export const connectToDB = async (dbName: string, uri: string) => {
  console.info(uri);
  if (connections[dbName]) {
    return connections[dbName];
  }

  try {
    const connection = await mongoose.createConnection(uri);

    console.log("Connected to MongoDB: ", dbName);

    connections[dbName] = connection;
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }

  console.info("connections -> ", connections);
};
