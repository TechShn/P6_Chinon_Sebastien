const Sauce = require('../models/sauces-model');

// Récupérer les sauces
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
      .then((sauces) => {
        res.status(200).json(sauces);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };
  
  // Créer une sauce
  exports.createSauce = (req, res, next) => {
    console.log(req.body)
    // const sauceObject = JSON.parse(req.body.sauce);
    // delete sauceObject._id;
    // const sauce = new Sauce({
    //   ...sauceObject,
    //   imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    // });
    // sauce
    //   .save()
    //   .then(() => res.status(201).json({ message: "Sauce enregistré !" }))
    //   .catch((error) => res.status(400).json({ error }));
  };
  
  