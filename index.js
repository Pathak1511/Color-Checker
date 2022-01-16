const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const viewRouter = require('./Router/viewRouter');
const app = express();

dotenv.config({ path: 'config.env' });
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/public`));
// const root = `${__dirname}/public`;
// console.log(root);

// app.get('/index', function (req, res) {
//   res.status(200).sendFile('/public/index.html', { root: __dirname });
// });
// app.get('/checker', function (req, res) {
//   res.status(200).sendFile('/public/checker.html', { root: __dirname });
// });
// app.get('/EnhancedChecker', function (req, res) {
//   res.status(200).sendFile('/public/EnhancedChecker.html', { root: __dirname });
// });
// app.get('*', function (req, res) {
//   res.status(404).sendFile('/public/Error404.html', { root: __dirname });
// });

app.use('/', viewRouter);
app.all('*', (req, res) => {
  res.status(404).render('Error', {
    title: 'Error | 404',
  });
});
console.log(process.env.PORT);

const port = process.env.PORT || 5501;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
