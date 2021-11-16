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




module.exports = router;