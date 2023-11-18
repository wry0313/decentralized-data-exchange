import { Db, MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI || "";

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI and DB_NAME environment variables inside .env.local"
  );
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db: Db;

const connectDB = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  db = client.db("client"); // replace with your database name
};

export { connectDB, db };
