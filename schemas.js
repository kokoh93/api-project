var Sequelize = require('sequelize');
var sq = new Sequelize('postgres://keodijah@localhost:5432/inclusion');
module.exports = sq.define('babyName', {
    birthYear: {
        type: sequelize.INTEGER
    },
    gender: {
        type: sequelize.STRING
    },
    ethncity: {
        type: sequelize.STRING
    },
    name: {
        type: sequelize.STRING
    },
     count: {
        type: sequelize.INTEGER
    },
     rank: {
        type: sequelize.INTEGER
    }
})