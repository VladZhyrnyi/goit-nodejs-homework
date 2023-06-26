const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const subs = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subscription: {
      type: String,
      enum: subs,
      default: subs[0],
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().trim().required(),
});

const subSchema = Joi.object({
  subscription: Joi.string().valid(...subs)
})

const schemas = {
  authSchema,
  subSchema
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
