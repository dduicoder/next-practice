import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sijinni:ddui2008@cluster0.k6kcviv.mongodb.net/community?retryWrites=true&w=majority"
    );
    const db = client.db();

    const communityCollection = db.collection("community");

    await communityCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Community was sent" });
  }
};

export default handler;
