const { Comment } = require('../models');

const commentData = [
    {
        comment_content: 'Maecenas a felis efficitur, interdum tortor ornare, fermentum lectus. Etiam.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_content: 'Nulla a rutrum neque. Duis efficitur massa purus, semper feugiat.',
        user_id: 2,
        post_id: 3
    },
    {
        comment_content: 'Fusce egestas, neque sit amet auctor vestibulum, ligula mauris dapibus.',
        user_id: 3,
        post_id: 4
    },
    {
        comment_content: 'Curabitur auctor fringilla condimentum. Vivamus vestibulum consectetur pellentesque. Lorem ipsum.',
        user_id: 4,
        post_id: 5
    },
    {
        comment_content: 'In vehicula dui nec vestibulum dapibus. Morbi in consectetur tellus.',
        user_id: 5,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;