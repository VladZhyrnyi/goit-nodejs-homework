const jimp = require("jimp");

const imageResizer = async (path) => {
  const image = await jimp.read(path);
  image.resize(250, 250);
  await image.writeAsync(path);
};

module.exports = imageResizer;
