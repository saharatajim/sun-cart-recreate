import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient('mongodb+srv://sun-cart:iu77K6Lrgszkmabn@cluster0.1xoqubi.mongodb.net/?appName=Cluster0');

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

