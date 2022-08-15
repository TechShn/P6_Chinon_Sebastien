const Sauces = require('../models/sauces');

exports.getAllSauces = (req, res, next) => {
        const sauces = [
            {
            userId: 'TechShn_P6',
            name: 'Roasted Garlic',
            manufacturer: "Dave's gourmet",
            description: "Cette sauce au goût d'ail grillé est idéale pour assaisonner les pâtes fraîches, les barbecues, les viandes, le poulet ou encore vos poelées de pomme de terre.",
            mainPepper: "Piment Tabasco, ail",
            imageUrl: "https://www.sauce-piquante.fr/265-large_default/sauce-piquante-a-l-ail-grille-dave-s.jpg",
            heat: 5,
            likes: 15,
            dislikes: 2,
            usersLiked: ['non'],
            usersDisliked: ['non']
        },
        {
            userId: 'nonono',
            name: 'Roasted Garlic',
            manufacturer: "Dave's gourmet",
            description: "Cette sauce au goût d'ail grillé est idéale pour assaisonner les pâtes fraîches, les barbecues, les viandes, le poulet ou encore vos poelées de pomme de terre.",
            mainPepper: "Piment Tabasco, ail",
            imageUrl: "https://www.sauce-piquante.fr/265-large_default/sauce-piquante-a-l-ail-grille-dave-s.jpg",
            heat: 5,
            likes: 15,
            dislikes: 2,
            usersLiked: ['non'],
            usersDisliked: ['non']
        }
    ];
    res.status(200).json({sauces})
}