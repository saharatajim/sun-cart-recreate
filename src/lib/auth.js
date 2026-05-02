import dotenv from "dotenv";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);



await client.connect()

const db = client.db("sun-cart");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
emailAndPassword: { 
    enabled: true, 
  } ,
});

