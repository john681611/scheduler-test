module.exports = (time, config) => {
  const any = '*'
  const formattedTime = time.split(':')
  let response = []

  config.forEach(app => {
    let date = new Date()
    let compDate = new Date()
    date.setHours(formattedTime[0], formattedTime[1], 0)
    compDate.setHours(formattedTime[0], formattedTime[1], 0)

    if (app.mins !== any) {
      date.setMinutes(app.mins)
    }

    if (app.hours !== any) {
      date.setHours(app.hours)
      if (app.mins === any && date.getHours() !== parseInt(formattedTime[0], 10)) {
        date.setMinutes(0)
      }
    }

    response.push({
      date: date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
      today: date.getTime() >= compDate.getTime(),
      app: app.app
    })
  })
  return response
}
