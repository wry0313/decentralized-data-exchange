import { MongoClient } from 'mongodb';

const url = process.env.ATLAS_URI || "";
const dbName = process.env.DB_NAME || "";

if (!url || !dbName) {
  console.error("Missing environment variables for MongoDB");
  process.exit(1);
}

const client = new MongoClient(url);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return client.db(dbName);
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
}
