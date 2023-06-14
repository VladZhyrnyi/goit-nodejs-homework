const mongoose = require("mongoose");

const app = require("./app");

// const {DB_HOST} = process.env;

const DB_HOST =
  "mongodb+srv://vlad:G0gy4Oj8X3OVmihf@phonebook.jbvfaun.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
