// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// pm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// manual approach (create package json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
// write a function that flattens array
const flattenArray = arr => {
  let result = []
  arr.forEach(element => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArray(element))
    } else {
      result.push(element)
    }
  })
  return result
}
const newItems_2 = flattenArray(items)
console.log(newItems_2)
