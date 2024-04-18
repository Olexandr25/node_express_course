const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`The system uptime is ${os.uptime()} seconds`)
// write console.log with days hours minutes seconds from uptime
const uptime = os.uptime()
const days = Math.floor(uptime / 86400)
const hours = Math.floor((uptime % 86400) / 3600)
const minutes = Math.floor((uptime % 3600) / 60)
const seconds = Math.floor(uptime % 60)
console.log(
  `The system uptime is ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
