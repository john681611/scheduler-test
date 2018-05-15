let expect = require('chai').expect
let reader = require('../src/reader')

describe('Reader', () => {
  it('should read file to array with objects', () => {
    const result = reader('test/mockFile.text')
    expect(result).to.be.an('array')
    expect(result[0]).to.be.an('object')
  })

  it('should have correctly formmated objects', () => {
    const expected = {
      mins: '30',
      hours: '1',
      app: '/bin/run_me_daily'
    }

    const result = reader('test/mockFile.text')
    expect(result[0]).to.deep.equal(expected)
  })

  it('should throw error on missing file', () => {
    expect(() => reader('broke/mockFile.text')).to.throw(Error, 'File Not Found')
  })

  it('should throw error on malformed file', () => {
    expect(() => reader('test/mockFileBroke.text')).to.throw(Error, 'config malformed')
  })
})
