var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FilmSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  brand: { type: String, required: true, maxLength: 100 },
  type: {
    type: String,
    enum: ["color", "black and white", "slide"],
  },
  iso: {
    type: Number,
    enum: [50, 100, 200, 400, 800, 1600, 3200],
  },
  slug: { type: String, unique: true, required: true },
  brand_slug: { type: String, unique: true, required: true },
  type_slug: { type: String, unique: true },
});

// Virtual for film's URL
FilmSchema.virtual("url").get(function () {
  return "/shop/film/" + this.slug;
});

//Export model
module.exports = mongoose.model("Film", FilmSchema);
