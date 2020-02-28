'use strict';

const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile) ;
const write = util.promisify(fs.writeFile) ;
const events = require('./event.js');
require('./logger.js');


const reader = (file) => {
  try{
    return read(file).then( (data) => {
      return data ;
    });
  }catch(error){
    return events.emit('error' , error);
  }
};

const writer = (file, data) => {
  try{
    return write(file , data);
  }catch(error){
    return events.emit('error' , error);
  }
};

const capsLock = (file) => {
  fs.readFile( file, (error, data) => {
    if(error) { 
      throw error; 
    }
    let text = data.toString().toUpperCase();
    let buffer = Buffer.from(text);
    fs.writeFile( file, buffer, (error, data) => {
      if(error) { 
        throw error; 
      }
    });
  });
};


module.exports = {reader , writer ,capsLock} ;