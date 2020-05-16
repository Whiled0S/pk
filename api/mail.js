const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'bot@pravo-kons.ru',
    pass: 'Anastasi12345'
  }
})

transporter.verify(function (error) {
  console.log(error || 'Mailer is ready')
})

module.exports = (req, res) => {
  let errors

  try {
    errors = validate(req.body)

    if (!Object.keys(errors).length) {
      sendMail(req.body)

      res.statusCode = 200
      res.json({ success: true })
    } else {
      res.statusCode = 403
      res.json(errors)
    }
  } catch {
    res.statusCode = 500
    res.send('Внутренняя ошибка сервера')
  }
}

function sendMail ({ name, email, phone, message }) {
  transporter.sendMail({
    from: 'bot@pravo-kons.ru',
    to: 'rassilka@pravo-kons.ru',
    subject: 'Новая заявка',
    text: `
      Имя: ${name}
      Email: ${email || 'Не указан'}
      Телефон: ${phone}
      Сообщение: ${message || 'Не указано'}
    `
  })
}

function validate (payload) {
  return {
    ...validateName(payload.name),
    ...validatePhone(payload.phone),
    ...validateEmail(payload.email)
  }
}

function validateName (name) {
  return !name || !name.length ? {
    name: 'Это поле не может быть пустым'
  } : {}
}

function validateEmail (email) {
  if (!email || !email.length) { return {} }
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) { return { email: 'Некорректное значение' } }
  return {}
}

function validatePhone (phone) {
  if (!phone) { return { phone: 'Это поле не может быть пустым' } }
  if (!new RegExp(/\d{11}/).test(phone)) { return { phone: 'Некорректное значние' } }
  return {}
}
