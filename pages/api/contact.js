import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() == ""
    ) {
      return res.status(422).json({
        succes: false,
        error: true,
        message: "Validation Error!",
      });
    }

    const newMessage = {
      name,
      email,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.ml4hu.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err) {
      if (err) {
        return res.status(500).json({
          error: true,
          message: err.message,
        });
      }
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne({ newMessage });
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      return res.status(500).json({
        error: true,
        message: err.message,
      });
    }

    client.close();

    return res.status(201).json({
      succes: true,
      error: false,
      message: "Message recived!",
      message: newMessage,
    });
  }
};

export default handler;
