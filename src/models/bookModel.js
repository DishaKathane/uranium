const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      unique: true,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["tech", "motivation", "fantacy"],
    },
    year: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Book", bookSchema); //books