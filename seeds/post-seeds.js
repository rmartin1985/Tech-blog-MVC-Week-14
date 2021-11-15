const { Post } = require('../models');

const postData = [
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1
    },
    {
        title: 'Sed in molestie nunc, quis.',
        content: 'Sed in dictum ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur libero libero, bibendum at felis vitae, imperdiet vehicula sem. Phasellus efficitur, libero eget consectetur molestie, augue mauris auctor nunc, vitae feugiat nibh mauris sed lacus. Suspendisse potenti. In elementum quis nunc ut mattis. Vivamus id erat odio. Nam facilisis orci quis arcu luctus semper ac convallis enim. Nam ut velit ut risus feugiat feugiat imperdiet vel arcu. Vivamus eget metus ligula. Vivamus sed aliquet quam. Aliquam mattis purus eu tellus ullamcorper commodo non tincidunt turpis. Ut fringilla venenatis nisl, sit amet pellentesque magna rutrum in. Nullam aliquet diam a tellus venenatis, sed egestas nisl consectetur. Curabitur a neque blandit, blandit ante vel, mattis nulla.',
        user_id: 2
    },
    {
        title: 'Vivamus fringilla sem ut diam.',
        content: 'Vestibulum cursus magna nec augue vestibulum aliquam. Aenean porta posuere mi, ut aliquet massa pretium eu. Suspendisse tristique, lectus sed suscipit pellentesque, turpis arcu dictum quam, ac semper tellus eros ut dui. Sed faucibus leo viverra nisl condimentum, sed sodales nisi vestibulum. Vivamus tincidunt lectus sapien, sed faucibus orci sollicitudin eget.',
        user_id: 3
    },
    {
        title: 'In venenatis ante nec blandit.',
        content: 'Maecenas maximus pharetra lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ultrices eget turpis eu posuere.',
        user_id: 4
    },
    {
        title: 'Sed vestibulum malesuada maximus. Proin.',
        content: 'Praesent efficitur libero eget libero porttitor feugiat. Nam leo enim, vehicula suscipit interdum et, porttitor non turpis. Donec non molestie dolor. Proin ut lorem condimentum, maximus nunc ac, lacinia ex.',
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;