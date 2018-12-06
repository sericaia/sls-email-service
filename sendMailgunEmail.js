const MAILGUN_APIKEY = process.env.MAILGUN_APIKEY
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

const mailgun = require('mailgun-js')({
  apiKey: MAILGUN_APIKEY,
  domain: MAILGUN_DOMAIN
});

exports.sendMailgunEmail = (message) => {
  return new Promise((resolve, reject) => {
    mailgun.messages().send(message, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}