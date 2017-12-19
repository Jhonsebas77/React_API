/**
 * Le indicamos que usa Express y que es una app que lo usa
 */

 const express = require ('express');
 const app = express();

 app.use(express.static(__dirname + '/public'));

 app.listen(3000, function(){
   console.log('server on port 3000')
 });
