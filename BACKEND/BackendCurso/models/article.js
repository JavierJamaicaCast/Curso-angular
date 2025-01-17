"use strict";
var mongoose = require("mongoose");
var schema = mongoose.Schema;
var articleSchema = schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  image: String,
});

module.exports = mongoose.model("Article", articleSchema);

// articles --> Guarda documentos de este tipo y estructura dentro de la coleccion
