const isObjectEmpty = (obj) => {
  return JSON.stringify(obj) === "{}";
};

module.exports = isObjectEmpty;
