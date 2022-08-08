const express = require('express');
const mongoose = require('mongoose');
const Thing = require('./models/thing')

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://TechShn_P6:53525770@cluster0.l4zrhit.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.post('/api/auth/signup', (req, res, next) => {
    const thing = new Thing({
      ...req.body
    });
    thing.save()
    .then(() => res.status(201).json({ message: 'Objet crée !'}))
    .then(console.log(thing))
    .catch(error => res.status(400).json({ error }));
});

app.post('/api/auth/login', (req, res, next) => {
  const thing = new Thing({
    ...req.body
  });
  thing.save()
  .then(() => res.status(201).json({ message: 'Objet crée !'}))
  .then(console.log(thing))
  .catch(error => res.status(400).json({ error }));
});

app.get('/api/auth/login', (req, res, next) => {
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
});




module.exports = app;