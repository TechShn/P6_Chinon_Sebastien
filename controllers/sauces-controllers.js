const Sauce = require('../models/sauces-model')
const fs = require('fs');

// Récupérer les sauces
exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

//Récupérer une sauce en particulier
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }))
};


// Créer une sauce
exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Sauce enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Modifier une sauce
exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file ? {
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };

  delete sauceObject._userId;
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: 'Not authorized' });
      } else {
        const fileName = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${fileName}`, () => {
          Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id } )
            .then(() => { res.status(200).json({ message: 'Objet modifié' }) })
            .catch(error => res.status(400).json({ error }))
        })
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

//Supprimez une sauce
exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: 'Not authorized' })
      } else {
        const fileName = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${fileName}`, () => {
          Sauce.deleteOne({ _id: req.params.id })
            .then(() => { res.status(200).json({ message: 'Objet supprimer' }) })
            .catch(error => res.status(400).json({ error }))
        })

      }
    })
    .catch((error) => {
      res.status(500).json({ error })
    })
};

// like et dilikes des sauces
exports.likeSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {

      //Permet d'ajouter un j'aime à une sauce, et d'ajouter l'userId dans le tableaux usersLiked dans la base de donnée
      if (!sauce.usersLiked.includes(req.body.userId) && req.body.like === 1) {
        Sauce.updateOne({ _id: req.params.id }, { $inc: { likes: 1 }, $push: { usersLiked: req.body.userId } })
          .then(() => res.status(200).json())
          .catch(error => res.status(400).json({ error }))
      }

      //Permet de retirer un j'aime à une sauce, et de retirer l'userId dans le tableaux usersLiked dans la base de donnée
      if (sauce.usersLiked.includes(req.body.userId) && req.body.like === 0) {
        Sauce.updateOne({ _id: req.params.id }, { $inc: { likes: -1 }, $pull: { usersLiked: req.body.userId } })
          .then(() => res.status(200).json())
          .catch(error => res.status(400).json({ error }))
      }


      //Permet d'ajouter un j'aime pas à une sauce, et d'ajouter l'userId dans le tableaux usersDisliked dans la base de donnée
      if (!sauce.usersDisliked.includes(req.body.userId) && req.body.like === -1) {
        Sauce.updateOne({ _id: req.params.id }, { $inc: { dislikes: 1 }, $push: { usersDisliked: req.body.userId } })
          .then(() => res.status(200).json())
          .catch(error => res.status(400).json({ error }))
      }

      //Permet de retirer un j'aime pas à une sauce, et de retirer l'userId dans le tableaux usersDisilked dans la base de donnée
      if (sauce.usersDisliked.includes(req.body.userId) && req.body.like === 0) {
        Sauce.updateOne({ _id: req.params.id }, { $inc: { dislikes: -1 }, $pull: { usersDisliked: req.body.userId } })
          .then(() => res.status(200).json())
          .catch(error => res.status(400).json({ error }))
      }
      res.status(200).json(sauce)
    })
    .catch(error => res.status(500).json(error))
};
