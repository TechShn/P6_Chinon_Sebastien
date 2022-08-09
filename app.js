const express = require('express');
const mongoose = require('mongoose');

const loginRoutes = require('./routes/login')
const signupRoute = require('./routes/signup')


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


app.use('/api/auth/login', loginRoutes);
app.use('/api/auth/signup', signupRoute);



module.exports = app;