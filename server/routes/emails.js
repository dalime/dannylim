const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.load();

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.route('/')
  .post((req, res) => {
    let from_email = new helper.Email(req.body.email);
    const to_email = new helper.Email('danny.b.lim@gmail.com');
    const subject = req.body.subject;
    let content = new helper.Content('text/plain',
      req.body.message
    );
    let mail = new helper.Mail(from_email, subject, to_email, content);

    let request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API (request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });
  })

module.exports = router;
