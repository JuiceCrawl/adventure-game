var http = require('http')
var play = require('./playweb')
var game = require('./game.source')

var server = http.createServer(
  function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    
    var answer = request.url.substr(1);

    if (answer === ""){
      response.writeHead(301, {'Location': game.startingPoint.title})
      response.end();
    } else if(answer in game.nodes){      
      play.playFunc(request, response,game.nodes[answer]);
    }else {
      response.writeHead(404, {'Content-Type': 'text/html'})
      response.write("Error: Not Found!");
      response.end();
    }
  
  })

server.listen(1234)
console.log('listening on http://localhost:1234')