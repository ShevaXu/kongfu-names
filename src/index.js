const uniqueRandom = require('unique-random-array')
const names = require('./kongfu-names.json')

module.exports = {
  all: names,
  random: uniqueRandom(names)
}
