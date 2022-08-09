const Thing = require('../models/thing')

exports.createThing = ( (req, res, next) => {
    const thing = new Thing({
      ...req.body
    });
    thing.save()
    .then(() => res.status(201).json({ message: 'Objet crée !'}))
    .then(console.log(thing))
    .catch(error => res.status(400).json({ error }));
  });


exports.findThing = ((req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  })