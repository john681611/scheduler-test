const fs = require('fs')
const path = require('path')

module.exports = (filePath) => {
  const resolvedPath = path.resolve(filePath)

  if (!fs.existsSync(resolvedPath)) {
    throw new Error('File Not Found')
  }

  let config = []
  const file = fs.readFileSync(resolvedPath, 'utf8')
  const lines = file.split(/\r?\n/)

  lines.forEach(line => {
    const section = line.split(' ')
    if (section.length > 3) {
      throw new Error('config malformed')
    }
    config.push({
      mins: section[0],
      hours: section[1],
      app: section[2]
    })
  })

  return config
}
