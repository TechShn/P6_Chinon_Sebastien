const Thing = require('../models/thing')

exports.createThing = ((req, res, next) => {
    const thing = new Thing({
      ...req.body
    });
    thing.save()
    .then(() => res.status(201).json({ message: 'Objet crée !'}))
    .then(console.log(thing))
    .catch(error => res.status(400).json({ error }));
  });