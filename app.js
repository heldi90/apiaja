const express = require('express');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = require('./app/models');

db.mongoose

  .connect(db.url)
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.log(`tidak bisa konek ke database ${err}`);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome bro!',
  });
});

require('./app/routes/post.routes')(app);

app.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
