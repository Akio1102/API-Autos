import { MongoClient } from "mongodb";
import { MONGODB } from "../Config/config.js";

export default async function (Collection) {
  try {
    const client = new MongoClient(MONGODB.URL);

    await client.connect();
    const db = client.db();
    return db.collection(Collection);
  } catch (error) {
    throw new Error({ message: "Error al conectar a MongoDB:", error });
  }
}
