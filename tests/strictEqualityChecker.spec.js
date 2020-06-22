const describe = require('mocha').describe
const it = require('mocha').it
const { expect } = require('chai')
let strictEqual = require('../strictEqualityChecker.js')

describe('strictEqual', () => {
  it('Tells you if two values are strictly equivilant', () => {
    let valA = 5
    let valB = 5

    let result = strictEqual(valA, valB)

    expect(result).to.equal(false)
  })
})
