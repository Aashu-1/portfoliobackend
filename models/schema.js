import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const clientSchema = mongoose.Schema({
  _id: Number,
  info: String,
  name: {
    type: String,
    lowercase: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    lowercase: true,
  },
  message: { type: String, lowercase: true },
});

clientSchema.plugin(mongooseUniqueValidator);
const clientSchemaModel = mongoose.model("client_details", clientSchema);
export default clientSchemaModel;
