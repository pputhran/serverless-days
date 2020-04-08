// random initialization time
const MAX = 5000
const MIN = 3000

const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
const date = Date.now();
let currentDate;

do {
    currentDate = Date.now();
  } while (currentDate - date < random);

exports.handler = async (event) => {
    console.log(event);    
    return {
        statusCode: 200,
        body: JSON.stringify('hello from sample provisioned lambda!!')
    }
  }