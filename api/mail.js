module.exports = (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body)
  res.status(200).json(req.body)
}
