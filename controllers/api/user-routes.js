const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET one user by Id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: [
                    'id',
                    'title',
                    'content',
                    'created_at'
                ]
            },
            {
                model: Comment,
                attributes: [
                    'id', 
                    'comment_content',
                    'created_at'
                ],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            },
            {
                model: Post,
                attributes: ['title'],
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: "No user found matching this id" });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});