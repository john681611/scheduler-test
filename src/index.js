const scheduler = require('./scheduler')
let reader = require('./reader')
let printer = require('./printer')

module.exports = (time, filePath) => {
  const config = reader(filePath)
  const schedule = scheduler(time, config)
  return printer(schedule)
}
