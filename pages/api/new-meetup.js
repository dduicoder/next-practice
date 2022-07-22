import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup was sent" });
  }
};

export default handler;
