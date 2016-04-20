# Put your adventure on the web

Today, we're going to make choose your own adventure a web app.

This is easier than it sounds


# First, we must make a web server

— What exactly is a web server?

    browser    request  ⇒ server
    browser ⇐ response   server


When I go to google.com and hit enter, this happens:

    chrome    request  ⇒ google.com
              GET /
    chrome ⇐ response    google.com
              200 OK

Then chrome draws the page.

# A little more detail

    chrome      request     ⇒ google.com
                GET /
    browser  ⇐ response       google.com
                200 OK
                Content-Type: text/html
                ...more headers...
                
                <!doctype html>...</html>

We're skipping over a little bit of stuff.

We'll get there.


# Other requests


    my chrome   request     ⇒ en.wikipedia.org
                GET /wiki/Hypnagogia

    my chrome ⇐ 200 OK...     en.wikipedia.org
    
    my chrome   request     ⇒ en.wikipedia.org
                GET /wiki/Sleep_paralysis

    my chrome ⇐ 200 OK...     en.wikipedia.org

    my chrome   request     ⇒ en.wikipedia.org
                GET /wiki/Hallucination

    my chrome ⇐ 200 OK...     en.wikipedia.org
    
    my chrome   request     ⇒ en.wikipedia.org
                GET /wiki/Schizophreniana

    my chrome ⇐ 200 OK...     en.wikipedia.org
    
How does this relate to our adventure game?


# Other requests


    browser   request     ⇒ your server
              GET /

    browser ⇐ response      your server
               200 OK
               
               Maze of twisty passages etc etc
               <a href="right">Go right</a>
               <a href="left">Go left</a>
    
    browser   request     ⇒ your server
              GET /right

    browser ⇐ 200 OK...     your server
           
               It is quite dark here.
               You feel the urge to stay still.
           
               <a href="flash">Turn on a flashlight</a>
               <a href="chill">Be still</a>


# Writing a web server in node.js

Let's look at the `http` module that node gives us.

    var http = require('http')
    
    var server = http.createServer(
      function(request, response) {
        response.end('Hi!')
      })
    
    server.listen(1234)
    
Now you have a web server.


# How do we know what path the browser wanted?

    var http = require('http')
    
    var server = http.createServer(
      function(request, response) {
        response.write('You requested: ' +
                       request.url)
        response.end('Hi!')
      })
    
    server.listen(1234)
    


# How do we make links?

    var http = require('http')
    
    var server = http.createServer(
      function(request, response) {
          response.writeHead(200,
            {'Content-Type': 'text/html'})


        response.write('You requested: ' +
                     request.url)

          response.end('Here, ' +
            '<a href="http://google.com/?q=' +
            request.url + '">' +
            "try Google.</a>")
      })
    
    server.listen(1234)
    

# A quote server

    // quotes.js
    
    var http = require('http')
    
    var quotes = {
      lorde: 'I am deliberate and afraid of nothing.',
      butler: 'God is change.',
    }

    var server = http.createServer(
      function(request, response) {
        response
          .writeHead(200,
                     {'Content-Type': 'text/html'})

        var quote = request.url.substr(1)
        
        console.log('Serving', quote)
      
        if (quote in quotes) {
          response.write(quotes[quote])
          console.log('Found.')
        } else {
          console.error('Not found.')
        }
        
        response.end()
      })

    server.listen(1234)

# Deploying

You can deploy this very quickly with [now](https://zeit.co/now/).

    npm install -g now
    now

You'll have to do an email dance.

