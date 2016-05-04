var uniqueRandom = require('unique-random-array')
var names = require('./kongfu-names.json')

module.exports = {
  all: names,
  random: uniqueRandom(names)
}
