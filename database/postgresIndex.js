const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('reviews', 'sdc', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});


