const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // fetching large amount of data w/o streams, reuires too much network capacity
  // const text = fs.readFileSync('./content/big.txt', 'utf-8')
  // res.end(text)

  const fileStream = fs.createReadStream('./content/big.txt', {encoding: 'utf-8'})
  fileStream.on('open', () => {
    // pipe converts readable stream data into writable stream data
    // pass in the response, it will write it to the page
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    res.end(err)
  })
}).listen(5000)



console.log('stream example')