const nodemailer = require('nodemailer')

module.exports = (req, res) => {
  let errors

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      auth: {
        user: 'bot@pravo-kons.ru',
        pass: 'Anastasi12345'
      }
    })

    transporter.verify(function (error) {
      console.log(error || 'Mailer is ready')
    })

    errors = validate(req.body)

    if (!Object.keys(errors).length) {
      sendMail(transporter, req.body)
        .then(() => {
          res.statusCode = 200
          res.json({ success: true })
        })
        .catch(() => {
          res.statusCode = 500
          res.send('Внутренняя ошибка сервера')
        })
    } else {
      res.statusCode = 403
      res.json(errors)
    }
  } catch {
    res.statusCode = 500
    res.send('Внутренняя ошибка сервера')
  }
}

function sendMail (transporter, { name, email, phone, message }) {
  return new Promise((resolve, reject) => {
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
    }, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info)
      }
    })
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
  if (!email || !email.length) {
    return {}
  }
  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return { email: 'Некорректное значение' }
  }
  return {}
}

function validatePhone (phone) {
  if (!phone) {
    return { phone: 'Это поле не может быть пустым' }
  }
  if (!new RegExp(/\d{11}/).test(phone)) {
    return { phone: 'Некорректное значние' }
  }
  return {}
}
