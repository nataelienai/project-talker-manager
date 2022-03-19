const express = require('express');
const errorHandler = require('./src/middlewares/errorHandler');
const talkerRouter = require('./src/routes/talker');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Online');
});
