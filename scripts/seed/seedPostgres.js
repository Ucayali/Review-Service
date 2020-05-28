const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('reviews', 'sdc', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

const reviewData = sequelize.define('reviewdata', {
  id: {type: DataTypes.INTEGER, primaryKey: true},
  review_id: DataTypes.INTEGER,
  name: DataTypes.STRING,
  stars: DataTypes.INTEGER,
  date: DataTypes.STRING,
  review: DataTypes.STRING(1000),
  image: DataTypes.STRING,
  title: DataTypes.STRING,
  avatar: DataTypes.INTEGER,
  foundThisHelpful: DataTypes.INTEGER
}, {
  indexes: [{name: 'review', fields: ['review_id'], using: 'BTREE'}],
  timestamps: false
});

reviewData.sync({force: true})
  .then(() => {
    sequelize.query(`Copy reviewdata FROM '/Users/elismac/Documents/System-Design-Capstone/Review-Service/SeedData.csv' WITH (format csv, header)`)
      .then(() => {
        sequelize.close()
          .then(() => {console.log('Database Closed')})
          .catch(() => {console.log('Something Happened')});
      });
  });
