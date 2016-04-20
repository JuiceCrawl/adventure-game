var http = require('http')

var game = require('./game.source')

var server = http.createServer(
  function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    
    var answer = request.url.substr(1);

    if (answer === ""){
      response.writeHead(301, {'Location': game.startingPoint.title})
      response.end();
    } else if(answer in game.nodes){      
      play(game.nodes[answer]);
    }else {
      response.writeHead(404, {'Content-Type': 'text/html'})
      response.write("Error: Not Found!");
      response.end();
    }
    
    function play(node){
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.write(node.text)

      var numOfChoices = node.connections.length
      for(var i = 0; i < numOfChoices; i++){
        var choice = node.connections[i].name
        var title = node.connections[i].value.title
        response.write(`</br><a href=${title}>${choice}</a>`);
      }

      if(node.connections.length === 0){
        response.write("Play Again?")  
        response.write(`</br><a href="/">Yes!</a>`);
        response.write(`</br><a href="http://kittytonpost.com/wp-content/uploads/2013/10/Cat-Pictures-Funny.jpg">No, thanks.</a>`);
      }  
        
      response.end();
    }
    
  })

server.listen(1234)
console.log('listening on http://localhost:1234')