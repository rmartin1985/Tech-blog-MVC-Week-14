const { User } = require('../models');

const userData = [
    {
        username: 'goalieangelic',
        password: 'goalieangelic123'
    },
    {
        username: 'quicklyunaffected',
        password: 'quicklyunaffected123'
    },
    {
        username: 'firedense',
        password: 'firedense123'
    },
    {
        username: 'presentshovel',
        password: 'presentshovel123'
    },
    {
        username: 'linedbouqet',
        password: 'linedbouqet123'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;