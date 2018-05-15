module.exports = (schedule) => {
  let strings = []

  schedule.forEach(app => {
    const day = app.today ? 'today' : 'tomorrow'
    strings.push(`${app.date} ${day} ${app.app}`)
  })

  return strings.join('\n\r')
}
