'use strict';

const events = require('./event');
const fileSystem = require('./file-system');

const net = require('net');
const socket = new net.Socket();

require('./logger.js');


if(process.argv[2]){
  fileSystem.capsLock(process.argv[2]);
  events.emit('log', 'To Upper Case Function');
  socket.connect(3001 , 'localhost' , ()=> {
  });    
  socket.write('file-saved’', (error) =>
    console.error(error));
  socket.end(()=> {
    console.log('Disconnected!!');
  });   
   
} else {
  socket.connect(3001 , 'localhost' , () => {});    
  socket.write('file-error', (error) =>
    console.error(error));
  socket.end(()=> {
    console.log('Disconnected!!');
  });    
  console.log('Error');
}