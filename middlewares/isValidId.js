const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  console.log(req.params);
  const { contactId: id } = req.params;
  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};

module.exports = isValidId;
