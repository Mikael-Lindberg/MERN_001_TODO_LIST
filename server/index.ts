import express from "express";
import { MongoClient } from "mongodb";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

client
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
    client.close();
  })
  .catch((err) => {
    throw err;
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
