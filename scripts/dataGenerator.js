const fs = require('fs');
const faker = require('faker');

const randomBetweenSix = () => {
  return Math.ceil(Math.random() * 6);
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const countryOfOrigin = [
  "the United States",
  "the United States",
  "the United States",
  "the United States",
  "the United States",
  `${faker.address.country()}`,
];

const writeReviews = fs.createWriteStream('SeedData.csv');
writeReviews.write(`id,review_id,name,stars,date,review,image,title,avatar,foundthishelpful\n`, 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
  console.log('Data is being generated... Please wait.')
  let i = 10000000;
  let id = 0;
  let review_id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      review_id += 1;
      for (let j = 0; j < randomBetweenSix(); j++) {
        id++;
        const name =`${faker.name.firstName()} ${faker.name.lastName()}`;
        const stars = getRandomInt(21);
        const date = `Reviewed in ${countryOfOrigin[getRandomInt(6)]} on ${faker.date.month()} ${getRandomInt(29) + 1} - ${getRandomInt(3) + 2018}`;
        const review = `${faker.lorem.sentences()} ${faker.lorem.sentences()}`;
        const image = 'PLACEHOLDER_FOR_URL';
        const title = `${faker.lorem.sentence()}`;
        const avatar = getRandomInt(16);
        const foundthishelpful = getRandomInt(86);
        const data = `${id},${review_id},${name},${stars},${date},${review},${image},${title},${avatar},${foundthishelpful}\n`;
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log('Data Generated');
});
