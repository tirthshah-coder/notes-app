/*
JSON.stringify() => It will recieve object and returns json data.
JSON.parse()     => It will recieve json data and returns object.
*/ 

const fs = require('fs');

// const books = {
//     title:'CID',
//     author:'BP Singh'
// }

// const jsonData = JSON.stringify(books);
// fs.writeFileSync('play.json',jsonData);

// const dataBuffer = fs.readFileSync('play.json');
// // console.log(dataBuffer);
// const data = JSON.parse(dataBuffer);
// console.log(data);


const dataBuffer = fs.readFileSync('play.json');
const data = JSON.parse(dataBuffer);
data.name = "CID";
data.planet = "Not from earth";
data.age = 21;

const jsonData  = JSON.stringify(data);
 fs.writeFileSync('play.json',jsonData);












