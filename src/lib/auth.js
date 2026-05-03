import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://sun-cart-recreate:F0MF1JrefcR2TLzm@cluster0.1xoqubi.mongodb.net/?appName=Cluster0");

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { 
    client
  }),
    emailAndPassword: { 
    enabled: true, 
  },
});