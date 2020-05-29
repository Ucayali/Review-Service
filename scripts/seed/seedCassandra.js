const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'sdc'
});

client.connect()
  .then(() => {
     client.execute('DROP TABLE IF EXISTS sdc.reviews')
      .then(() => {
        client.execute('CREATE TABLE IF NOT EXISTS sdc.reviews (id int PRIMARY KEY, review_id int, name text, stars text, date text, review text, image text, title text, avatar int, foundThisHelpful int)')
          .then(() => {
            client.shutdown();
            console.log('New Table Made');
          })
          .catch(() => {
            console.log('Error Seeding CREATE TABLE');
            client.shutdown();
          });
      })
      .catch(() => {
        console.log('Error Seeding DROP TABLE');
        client.shutdown();
      });
  })
  .catch(() => {
    console.log('Error Seeding ON CONNECTION');
    client.shutdown();
  });
