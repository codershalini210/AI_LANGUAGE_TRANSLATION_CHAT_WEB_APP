// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    default: "user",
  },
  preferredLanguage: {
    type: String,
    default: "en",
  },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
