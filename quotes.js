var http = require('http')

var quotes = {
  lorde: 'I am deliberate and afraid of nothing.',
  butler: 'God is change.',
}

var server = http.createServer(
  function(request, response) {
    var quote = request.url.substr(1)
    
    console.log('Serving', quote)

    if (quote in quotes) {
      response
        .writeHead(200,
                   {'Content-Type': 'text/html'})      
      response.write(quotes[quote])
      console.log('Found.')
    } else {
      response
        .writeHead(404,
                   {'Content-Type': 'text/html'})      
      response.write("Quote not found.")
      console.error('Not found.')
    }
    
    response.end()
  })

server.listen(1234)
console.log('listening on http://localhost:1234')
