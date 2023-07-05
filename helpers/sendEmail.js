const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const { SG_API_KEY, SG_FROM_USER } = process.env;

sgMail.setApiKey(SG_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: SG_FROM_USER };

  await sgMail.send(email);

  return true;
};

module.exports = sendEmail;
