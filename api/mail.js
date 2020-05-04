// const nodemailer = require('nodemailer')

module.exports = function (req, res) {
  res.status(200).send('This is a mailer module')
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.yandex.ru',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: 'sender@ololocalhost.ru',
  //     pass: '58901337Wh'
  //   }
  // })
  //
  // transporter.verify(function (error) {
  //   if (error) {
  //     // eslint-disable-next-line no-console
  //     console.log(error)
  //   } else {
  //     // eslint-disable-next-line no-console
  //     console.log('Server is ready')
  //   }
  // })
  //
  // transporter.sendMail({
  //   from: 'sender@ololocalhost.ru',
  //   to: 'mailer@ololocalhost.ru',
  //   subject: 'Hello world',
  //   text: 'Plaintext version of the message',
  //   html: '<p>Письмишко</p>'
  // }, (err, info) => {
  //   if (err) {
  //     res.status(500).send(err)
  //   } else {
  //     res.status(200).send(info)
  //   }
  // })
}
