var http = require('http')

var play = {
  playFunc: function (request, response,node){
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
}

module.exports = play;

