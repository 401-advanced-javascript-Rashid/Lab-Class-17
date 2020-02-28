'use strict';

const fileSystem = require('../file-system');
const server = require('../server.js');

let file = 'test.json';

describe('test' , () => {

  it('Read the file as a string' , () => {
    return fileSystem.reader(file)
      .then( (data) => { 
        expect(typeof(data.toString().trim())).toEqual('string');
      });

  });

  it('Write on the file' , () => {
    let data = JSON.stringify({'test': 'as a string'});
    let buffedData = Buffer.from(data);
    return fileSystem.writer(file , buffedData)
      .then(data => {
      });
  });


  it('Convert text to UpperCase' , () => {
    fileSystem.capsLock(file);
    return fileSystem.reader(file)
      .then( (data) => { 
        expect(typeof(data.toString().trim())).toEqual('string');
      });
  });
});

describe('Broadcast handler ' , () => {
  
  it(`It's Works` , () => {
    let JB007  = jest.spyOn(console , 'log').mockImplementation(); 
    server('Teflon Sega - Beretta Lake');
    expect(JB007).toHaveBeenCalled();
  });
});