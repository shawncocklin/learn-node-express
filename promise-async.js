const { readFile, writeFile } = require('fs').promises

// USING UTIL LIBRARY
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




async function start() {
  try {
    const first = await readFile('./content/first.txt', 'utf-8')
    const second = await readFile('./content/second.txt', 'utf-8')
    await writeFile('./content/result.txt', `This is awesome: ${first} & ${second}`, {flag: 'a'})
    console.log(first)
    console.log(second)
    
  } catch(err) {
    console.log(err)
  }
}

start()




// getText('./content/first.txt')
//   .then(result => {
  //     console.log(result)
  //   })
  //   .catch(err => {
    //     console.log(err)
    //   })
    
    // function getText(path) {
    //   return new Promise((resolve, reject) => {
    //     readFile(path, 'utf-8', (err, data) => {
    //       if(err) {
    //         reject(err)
    //       }
    //       else {
    //         resolve(data)
    //       }
    //     })
    //   })
    // }
    