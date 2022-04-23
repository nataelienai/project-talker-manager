const express = require('express');
const errorHandler = require('./src/middlewares/errorHandler');
const talkerRouter = require('./src/routes/talker');
const loginRouter = require('./src/routes/login');

const app = express();
app.use(express.json());

const PORT = '3000';

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
