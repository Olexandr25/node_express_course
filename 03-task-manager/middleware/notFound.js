const notFound = (req, res) => {
  res.status(404).json({ msg: `Route to ${req.url} not found` })
}

module.exports = notFound
