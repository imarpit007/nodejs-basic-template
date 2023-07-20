// var http = require("http");

// http.createServer(function (request, response) {
//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');


const express = require('express')
const app = express()
const port = 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, ()=>{
   console.log(`Server running at http://127.0.0.1:${port}/`);
   // console.log(`App listening on port`, port);
})