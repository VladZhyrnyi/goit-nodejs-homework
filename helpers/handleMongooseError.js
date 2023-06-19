const ERRORS = {
  11000: 409,
};

const handleMongooseError = (error, data, next) => {
  const { name, code } = error;
  error.status = 400;

  if (name === "MongoServerError") {
    error.status = ERRORS[+code] || 400;
  }
  next();
};

module.exports = handleMongooseError;
