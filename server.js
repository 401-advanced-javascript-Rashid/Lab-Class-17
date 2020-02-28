'use strict' ;

const net = require('net');

const app = net.createServer();

let usersSpace = {} ;
console.log('space' , usersSpace);

app.on('connection' , (user) => {
  const id = `User ID: ${Math.random()} `;
  console.log('New User', id);
  usersSpace[id] = user ;
  user.on('data' , (buffer) => 
    broadcast(buffer));
  user.on('end' , () => 
    delete usersSpace [ id ] );
  user.on('error' , (e) => 
    console.error(e));
});

function broadcast(data){
  for(let user in usersSpace){
    usersSpace[user]
      .write(JSON.stringify(data.toString().trim()));
  }
  console.log('Status!',JSON.stringify(data.toString().trim()));
}

module.exports = broadcast ;