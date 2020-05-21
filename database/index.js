const mariadb = require("mysql");
const mariadbConfig = require("./config.js");

const connection = mariadb.createConnection(mariadbConfig);

const getAllReviews = function(id, callback) {
  if (id === null) {
    var sql = `select * from reviews where id=${1}`;
  } else {
    var sql = `select * from reviews where id=${id}`;
  }
  connection.query(sql, function(err, results) {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

const deleteReview = (id, callback) => {
  connection.query(`DELETE FROM reviews WHERE id=${id}`, (err) => {
    if (err) {
      console.log('Error on Delete:', err)
      callback(err)
    } else {
      console.log('Data Deleted');
      callback(null);
    }
  })
};

const updateReview = (id, data, callback) => {
  connection.query(`UPDATE reviews SET review = ${data} WHERE id=${id}`, (err) => {
    if (err) {
      console.log('Error on Update:', err)
      callback(err)
    } else {
      console.log('Data Updated');
      callback(null);
    }
  });
}

const addReview = (data, callback) => {
  connection.query(`INSERT INTO reviews (id, name, stars, date, review, image, title, avatar, foundThisHelpful) VALUES (
    ${data.id}, 
    '${data.firstName} ${data.lastName}', 
    '${data.stars}', 
    'Reviewed in ${data.country} on ${data.date}', 
    '${data.review}', 
    '${data.imageURL}', 
    '${data.title}', 
    '${data.userAvatarURL}', 
    '${data.helpfulCount}')`, (err) => {
      if (err) {
        console.log('Error on Insert:', err)
        callback(err)
      } else {
        console.log('Data Inserted');
        callback(null);
      }
    })
}

module.exports.connection = connection;
module.exports.getAllReviews = getAllReviews;
module.exports.deleteReview = deleteReview;
module.exports.updateReview = updateReview;
module.exports.addReview = addReview;
