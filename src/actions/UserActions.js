let sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
let helper = require('sendgrid').mail;

const UserActions = {
  sendEmail(obj) {
    let from_email = new helper.Email(obj.email);
    let to_email = new helper.Email(process.env.EMAIL_ADDRESS);
    let subject = obj.message;
    let content = new helper.Content(obj.message);
    let mail = new helper.Mail(from_email, subject, to_email, content);

    let request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, (err, response) => {
      console.log(response.statusCode);
      console.log (response.body);
      console.log(response.headers);
    });
  }
}

export default UserActions;
