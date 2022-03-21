const isTalkValid = (talk) => Boolean(talk && (talk.rate || talk.rate === 0) && talk.watchedAt);

const isRateValid = (rate) => !Number.isNaN(rate) && rate >= 1 && rate <= 5;

const isDateFormatValid = (date) => {
  const dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  return dateRegex.test(date);
};

const validateTalk = (talk) => {
  if (!isTalkValid(talk)) {
    return {
      error: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
      isValid: false,
    };
  }
  if (!isRateValid(talk.rate)) {
    return { error: 'O campo "rate" deve ser um inteiro de 1 à 5', isValid: false };
  }
  if (!isDateFormatValid(talk.watchedAt)) {
    return { error: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', isValid: false };
  }
  return { error: '', isValid: true };
};

const talkerTalkValidator = (req, _res, next) => {
  const { talk } = req.body;
  const validation = validateTalk(talk);

  if (!validation.isValid) {
    const error = new Error(validation.error);
    error.status = 400;
    return next(error);
  }
  next();
};

module.exports = talkerTalkValidator;
