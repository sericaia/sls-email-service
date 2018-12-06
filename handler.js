'use strict';

const { sendMailgunEmail } = require('./sendMailgunEmail');

module.exports.sendEmail = async (event, context) => {

  let toAddress = "";
  if (event.body) {
    try {
      toAddress = JSON.parse(event.body).to_address || "";
    }
    catch (e) {
      return {
        statusCode: 422,
        body: JSON.stringify({
          message: "No address specified.",
        }),
      }
    }
  }

  const emailData = {
    from: 'Random person <random@mailgun.com>',
    to: toAddress,
    subject: 'Hi',
    text: 'I love sunny days!',
  };

  try {
    await sendMailgunEmail(emailData);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Email sent!",
      }),
    };
  } catch (e) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        message: "No email sent :(",
      }),
    }
  }
};