const expect = require('chai').expect
const scheduler = require('../src/scheduler')

describe('scheduler', () => {
  it('out put format schedule array given config array', () => {
    const config = [{
      hours: '1',
      mins: '1',
      app: 'test'
    }]

    const result = scheduler('01:01', config)
    expect(result).to.be.an('array')
    expect(result[0]).to.be.an('object')
  })

  it('given set time config and before time output time and app', () => {
    const config = [{
      hours: '5',
      mins: '15',
      app: 'test'
    }]

    const expected = [{
      date: new Date().setHours(5, 15),
      app: config.app
    }]
    const result = scheduler('01:01', config)
    expect(result).to.deep.equal(expected)
  })
})
