'user strict' ;

const events = require('./event.js');

events.on('log', logger);
events.on('error' , errorHandler);

function errorHandler(error){
  console.log(error);
}

function logger(event){
  let date = new Date().toUTCString();
  console.log({event , date});
}

module.exports = { errorHandler , logger};