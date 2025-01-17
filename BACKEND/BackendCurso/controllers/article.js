"use strict";
var validator = require("validator");
var fs = require("fs");
var path = require("path");
var Article = require("../models/article");
var controller = {
  datosCurso: (req, res) => {
    var hola = req.body.hola;

    return res.status(200).send({
      curso: "Master",
      autor: "Javier",
      url: "javier.es",
      hola,
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Soy la accion test de mi controlador de articulos",
    });
  },

  save: (req, res) => {
    // Recoger los parametros por post
    var params = req.body;

    // Validar datos (Validator)
    try {
      var validateTitle = !validator.isEmpty(params.title);
      var validateContent = !validator.isEmpty(params.content);
    } catch (error) {
      return res.status(200).send({
        status: "error",
        message: "Faltan datos por enviar.",
      });
    }

    if (validateTitle && validateContent) {
      // Crear el objeto a guardar
      var article = new Article();
      // Asignar valores
      article.title = params.title;
      article.content = params.content;
      console.log(params.image)
      if (params.image) {
        article.image = params.image; 
      } else {
        article.image = null;
      }
      // Guardar el articulo
      article
        .save()
        .then((articleStored) => {
          return res.status(200).send({
            status: "success",
            article: articleStored,
          });
        })
        .catch((err) => {
          return res.status(404).send({
            status: "error",
            message: "El articulo no se ha guardado.",
          });
        });
    } else {
      return res.status(200).send({
        status: "error",
        message: "Los datos no son validos.",
      });
    }
  },

  getArticles: (req, res) => {
    var query = Article.find({});
    var last = req.params.last;
    if (last || last != undefined) {
      query.limit(5);
    } // Find
    query
      .sort("-_id")
      .exec()
      .then((articles) => {
        if (!articles || articles.length === 0) {
          return res.status(404).send({
            status: "error",
            message: "No hay articulos para mostrar",
          });
        }
        return res.status(200).send({
          status: "success",
          articles,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          status: "error",
          message: "Error al devolver los articulos.",
        });
      });
  },

  getArticle: (req, res) => {
    // Recoger el id de la url
    var articleId = req.params.id;
    // Comprobar que no sea nula
    if (!articleId || articleId == undefined) {
      return res.status(404).send({
        status: "error",
        message: "No existe el articulo.",
      });
    }
    // Buscar el articulo

    Article.findById(articleId)
      .exec()
      .then((article) => {
        // Devolverlo en json

        return res.status(200).send({
          status: "success",
          article,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          status: "error",
          message: "No existe el articulo.",
        });
      });
  },

  update: (req, res) => {
    //Recoger el id
    var articleId = req.params.id;
    //Recoger los datos que llegan por put
    var params = req.body;
    // Validar los datos
    try {
      var validateTitle = !validator.isEmpty(params.title);
      var validateContent = !validator.isEmpty(params.content);
    } catch (error) {
      return res.status(404).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    if (validateTitle && validateContent) {
      // Find and update
      Article.findOneAndUpdate({ _id: articleId }, params, {
        new: true,
      })
        .exec()
        .then((articleUpdated) => {
          return res.status(200).send({
            status: "success",
            article: articleUpdated,
          });
        })
        .catch((err) => {
          return res.status(500).send({
            status: "error",
            message: "No existe el articulo.",
          });
        });
    } else {
      return res.status(500).send({
        status: "error",
        message: "La valdiacion no es correcta.",
      });
    }
  },

  delete: (req, res) => {
    //Recoger el id de la url
    var articleId = req.params.id;
    //Find and delete
    Article.findOneAndDelete({ _id: articleId })
      .exec()
      .then((articleRemoved) => {
        return res.status(200).send({
          status: "success",
          article: articleRemoved,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          status: "error",
          message: "No existe el articulo.",
        });
      });
  },

  upload: (req, res) => {
    // Configurar el modulo de multiparty router/article.js (Hecho)
    // Recoger el fichero de la peticion
    var fileName = "Imagen no subida";
    if (!req.files) {
      return res.status(404).send({
        status: "error",
        message: fileName,
      });
    }
    // Conseguir el nombre y la extension
    var filePath = req.files.file0.path;
    var fileSplit = filePath.split("\\");

    var fileName = fileSplit[2];
    var fileExtSplit = fileName.split(".");
    var fileExt = fileExtSplit[1];
    // Comprobar la extension solo imagenes, si es valida borrar el fichero
    if (
      fileExt != "png" &&
      fileExt != "jpg" &&
      fileExt != "jpeg" &&
      fileExt != "gif"
    ) {
      // Borrar el archivo subido
      fs.unlink(filePath, (err) => {
        return res.status(404).send({
          status: "error",
          message: "La extension de la imagen no es valida.",
        });
      });
    } else {
      var articleId = req.params.id;
      if (articleId) {
        //Buscar el articulo, asignarle el nombre de la imagen y actualizarlo
        Article.findOneAndUpdate(
          { _id: articleId },
          { image: fileName },
          {
            new: true,
          }
        )
          .exec()
          .then((articleUpdated) => {
            return res.status(200).send({
              status: "success",
              article: articleUpdated,
            });
          })
          .catch((err) => {
            return res.status(500).send({
              status: "error",
              message: "No existe el articulo.",
            });
          });
      } else {
        return res.status(200).send({
          status: "success",
          image: fileName,
        });
      }
    }
  },

  getImage: (req, res) => {
    var file = req.params.image;
    var pathFile = "./upload/articles/" + file;
    fs.exists(pathFile, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(pathFile));
      } else {
        return res.status(500).send({
          status: "error",
          message: "La imagen no existe.",
        });
      }
    });
  },

  search: (req, res) => {
    // Sacar el string a buscar
    var searchString = req.params.search;
    // Find or
    Article.find({
      $or: [
        { title: { $regex: searchString, $options: "i" } },
        { content: { $regex: searchString, $options: "i" } },
      ],
    })
      .sort([["date", "descending"]])
      .exec()
      .then((articles) => {
        if (articles.length) {
          return res.status(200).send({
            status: "success",
            articles,
          });
        }
        return res.status(404).send({
          status: "error",
          message: "No hay articulos que coincidan con tu busqueda.",
        });
      })
      .catch((err) => {
        return res.status(404).send({
          status: "error",
          message: "Error inesperado",
        });
      });
  },
};

// end controller

module.exports = controller;
