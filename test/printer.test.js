let expect = require('chai').expect
let printer = require('../src/printer')

describe('Printer', () => {
  it('should return formated string given schedule ', () => {
    const schedule = [{
      date: '15:15',
      today: true,
      app: 'test'
    }]
    const expected = '15:15 today test'

    expect(printer(schedule)).to.be.equal(expected)
  })

  it('should return formated string given schedule set tomorrow ', () => {
    const schedule = [{
      date: '15:15',
      today: false,
      app: 'test'
    }]
    const expected = '15:15 tomorrow test'

    expect(printer(schedule)).to.be.equal(expected)
  })

  it('should return formated string given schedule multi line ', () => {
    const schedule = [{
      date: '15:15',
      today: false,
      app: 'test'
    },
    {
      date: '05:15',
      today: true,
      app: 'test2'
    }]
    const expected = '15:15 tomorrow test\n\r05:15 today test2'

    expect(printer(schedule)).to.be.equal(expected)
  })
})
