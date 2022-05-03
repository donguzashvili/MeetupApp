import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;

    const client = await MongoClient.connect(
      `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.cr7rk.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({
      message: "Meetup inserted!",
    });
  }
}

export default handler;
