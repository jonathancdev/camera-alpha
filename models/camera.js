// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

var CameraSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  brand: { type: String, required: true, maxLength: 100 },
  type: {
    type: String,
    enum: ["SLR", "TLR", "rangefinder", "viewfinder", "point and shoot"],
  },
  format: {
    type: String,
    enum: ["35mm", "120", "35mm half-frame"],
  },
  mount: {
    type: String,
    enum: ["Nikon F", "Canon EF", "Minolta SD", "fixed"],
  },
  focus: {
    type: String,
    enum: ["auto", "manual", "auto/manual"],
  },
  power: {
    type: String,
    required: false,
  },
  //   images: {
  //     type: Array,
  //     required: false,
  //   },
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

const obj = {
  name: "",
  brand: "",
  type: "",
  format: "",
  mount: "",
  focus: "",
  power: "",
};
