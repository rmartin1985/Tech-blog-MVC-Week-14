const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments 
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['comment_content']
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// GET one comment
router.get('/:id', (req, res) => {
    Comment.findAll({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// CREATE a new comment
router.post('/', (req, res) => {
    Comment.create({
        comment_content: req.body.comment_content,
        post_id: req.body.post_id,
        user_id: req.session.user_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

// UPDATE a comment
router.put('/:id', (req, res) => {
    Comment.update({
        comment_content: req.body.comment_content
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: "No comment found that matches this id." });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if (!dbCommentData) {
                res.status(404).json({ message: "No comment found that matches this id." });
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;