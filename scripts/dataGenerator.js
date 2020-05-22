const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

const randomBetweenTen = () => {
  return Math.ceil(Math.random() * 10);
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

const dataGen = (num) => {
  let id = 1;
  writer.pipe(fs.createWriteStream('SeedData.csv'));
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < randomBetweenTen(); j++) {
      writer.write({
        id: id,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        stars: getRandomInt(21),
        date: `Reviewed in ${countryOfOrigin[getRandomInt(6)]} on ${faker.date.month()} ${getRandomInt(29) + 1}, ${getRandomInt(2) + 2018}`,
        review: `${faker.lorem.sentences()} ${faker.lorem.sentences()}`,
        image: 'PLACEHOLDER_FOR_URL',
        title: `${faker.lorem.sentence()}`,
        avatar: getRandomInt(16),
        foundThisHelpful: getRandomInt(86)
      });
    }
    id++;
  }
  writer.end();
  console.log('CSV File Made! You Da Best!')
}

dataGen(10);
