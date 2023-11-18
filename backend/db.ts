import { Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const dbName = process.env.DB_NAME || "";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db: Db;

export const connectDB = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  db = client.db(dbName); // replace with your database name
};

export const getDb = () => {
  if (!db) {
    throw new Error("Database not initialized");
  }
  return db;
};
