import mongoose from "mongoose";

export const connections: any = {};

interface IConnectToDB {
  dbName: string;
  uri: string;
}

export const connectToDB = async (props: IConnectToDB[]) => {
  try {
    const uri = process.env.MONGO_URI1 as string;
    const defaultConnection = await mongoose.connect(uri);

    // console.info("default db connection: ", defaultConnection);
    console.log("Connected to default");

    for (const { dbName, uri } of props) {
      if (!connections[dbName]) {
        connections[dbName] = mongoose.createConnection(uri);
        console.log("Connected to MongoDB: ", dbName);
      }
    }

    // connections[dbName] = connection;
    // return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }

  // console.info("connections -> ", connections);
  // console.info("all connections -> ", mongoose.connections);
};
