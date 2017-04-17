// Routes for films Resource
var Film = require("../client/src/models/film.js")
var films = require("../client/src/models/films.js")();
var express = require("express");
var filmRouter = new express.Router();

// INDEX
filmRouter.get('/', function(req, res){
  res.json(films);
})

// SHOW
filmRouter.get("/:id", function(req, res){
  // console.log(req.params)
  res.json( { data: films[req.params.id ] } )
})

// UPDATE
filmRouter.put("/:id", function(req, res){
  // console.log(req.body);
  films[req.params.id] = req.body.film;
  res.json(films);
})

// CREATE
filmRouter.post("/", function(req, res){
  var newFilm = new Film(req.body);
  films.push(newFilm);
  res.json(films);
})

// DELETE
filmRouter.delete("/:id", function(req, res){
  films.splice(req.params.id, 4)
  res.json(films)
})


module.exports = filmRouter;