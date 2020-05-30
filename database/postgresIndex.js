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

const getAllReviews = function(id) {
  return reviewData.findAll({
    where: {
      review_id: id
    }
  });
};

const addReview = (data) => {
  return reviewData.create({
    id: data.id,
    review_id: data.review_id,
    name: data.name,
    stars: data.stars,
    date: data.data,
    review: data.review,
    image: data.image,
    title: data.title,
    avatar: data.avatar,
    foundThisHelpful: data.foundThisHelpful
  });
}

module.exports.getAllReviews = getAllReviews;
module.exports.addReview = addReview;
