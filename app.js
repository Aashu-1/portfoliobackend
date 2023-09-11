import bodyParser from "body-parser";
import express from "express";
import "./models/connection.js";
import clientSchemaModel from "./models/schema.js";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post("/", async (req, res, next) => {
  const client = await clientSchemaModel.find().sort({ _id: -1 });
  const id = client.length === 0 ? 1 : client[0]._id + 1;
  const clientDetails = {
    _id: id,
    info: new Date(),
    ...req.body,
  };
  try {
    const isClientSaved = await clientSchemaModel.create(clientDetails);

    if (isClientSaved) {
      res.status(200).json({ msg: "your request has been sent successfully" });
    } else {
      res.status(400).json({ msg: "server error" });
    }
  } catch (error) {
    res.status(404).json({
      err: error,
      msg: "You have already sent the request, please have patience",
    });
  }
});

app.listen(3001);
console.log("server is activated at http://localhost:3001");
