const expect = require('chai').expect
const scheduler = require('../src/scheduler')

const constConfig = [{
  hours: '1',
  mins: '1',
  app: 'test'
}]

let config

describe('scheduler', () => {
  beforeEach(() => {
    config = constConfig
  })

  it('should out put format schedule array given config array', () => {
    const result = scheduler('01:01', config)
    expect(result).to.be.an('array')
    expect(result[0]).to.be.an('object')
  })

  it('should given full time config output date object matching time', () => {
    config[0].hours = '15'
    config[0].mins = '15'

    const expected = [{
      date: '15:15',
      today: true,
      app: config[0].app
    }]
    const result = scheduler('01:01', config)
    expect(result).to.deep.equal(expected)
  })

  it('should given full time and passed time after return today false', () => {
    config[0].hours = '5'
    config[0].mins = '15'

    const expected = [{
      date: '05:15',
      today: false,
      app: config[0].app
    }]
    const result = scheduler('06:00', config)
    expect(result).to.deep.equal(expected)
  })

  it('should given only mins config should output next occurrence of mins past hour', () => {
    config[0].hours = '*'
    config[0].mins = '30'

    const expected = [{
      date: '01:30',
      today: true,
      app: config[0].app
    }]
    const result = scheduler('01:01', config)
    expect(result).to.deep.equal(expected)
  })

  it('should given only hour config and time outside hour should output next occurrence of hour', () => {
    config[0].hours = '5'
    config[0].mins = '*'

    const expected = [{
      date: '05:00',
      today: true,
      app: config[0].app
    }]
    const result = scheduler('01:05', config)
    expect(result).to.deep.equal(expected)
  })

  it('should given only hour config and time inside hour should output next occurrence of hour', () => {
    config[0].hours = '5'
    config[0].mins = '*'

    const expected = [{
      date: '05:05',
      today: true,
      app: config[0].app
    }]
    const result = scheduler('05:05', config)
    expect(result).to.deep.equal(expected)
  })

  it('should given no mins or hours returns now', () => {
    config[0].hours = '*'
    config[0].mins = '*'

    const expected = [{
      date: '01:01',
      today: true,
      app: config[0].app
    }]
    const result = scheduler('01:01', config)
    expect(result).to.deep.equal(expected)
  })

  it('should deal with more than one line', () => {
    const multiConfig = [{
      hours: '1',
      mins: '5',
      app: 'test'
    },
    {
      hours: '*',
      mins: '*',
      app: 'test2'
    }]

    const expected = [{
      date: '01:05',
      today: true,
      app: 'test'
    },
    {
      date: '01:01',
      today: true,
      app: 'test2'
    }]
    const result = scheduler('01:01', multiConfig)
    expect(result).to.deep.equal(expected)
  })
})
