const { HttpError, isObjectEmpty } = require("../helpers");

const validateBody = (schema, emptyObjMsg = 'missing fields') => {
  const func = (req, res, next) => {
    if (isObjectEmpty(req.body)) {
      next(HttpError(400, emptyObjMsg));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(
        HttpError(400, `missing required ${error.details[0].path[0]} field`)
      );
    }
    next();
  };

  return func;
};

module.exports = validateBody;
