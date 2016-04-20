var http = require('http')

var game = require('game')

var server = http.createServer(
  function(request, response) {
    response
      .writeHead(200,
                 {'Content-Type': 'text/html'})

    // TODO
    
    response.end()
  })

server.listen(1234)
