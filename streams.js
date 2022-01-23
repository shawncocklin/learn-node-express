const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt')


// by default returns data chunks of 64kb. This can be changed by passing in an option:
// highWaterMark - lets you choose the size of the data chunk
// encoding option lets you choose the file type to be rendered

const stream = createReadStream('../content/big.txt', {highWaterMark: 90000, encoding: 'utf-8'})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf-8'})


stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => {
  console.log(err)
})