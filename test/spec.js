const names = require('../src')
const assert = require('assert')

const isArrayOfStrings = arr => {
  return typeof arr === 'object' && arr.every(a => typeof a === 'string')
}

describe('kongfu-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      assert.ok(isArrayOfStrings(names.all))
    })
    it('should contain 韦小宝', () => {
      assert.ok(names.all.includes('韦小宝'))
    })
  })
  describe('random', () => {
    it('should return a random name', () => {
      const randomName = names.random()
      assert.ok(names.all.includes(randomName))
    })
  })
})
