let expect = require('chai').expect
let reader = require('../src/reader')

describe('Reader', () => {
  it('should read file to array with objects', () => {
    const result = reader('./mockFile.text')
    expect(result).to.be.an('array')
    expect(result[0]).to.be.an('object')
  })

  it('should have correctly formmated objects', () => {
    const expected = {
      mins: '30',
      hours: '1',
      app: '/bin/run_me_daily'
    }

    const result = reader('./mockFile.text')
    expect(result[0]).to.deep.equal(expected)
  })
})
