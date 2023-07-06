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
    avatarUrl: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().trim().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

const subSchema = Joi.object({
  subscription: Joi.string().valid(...subs),
});

const schemas = {
  authSchema,
  emailSchema,
  subSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
