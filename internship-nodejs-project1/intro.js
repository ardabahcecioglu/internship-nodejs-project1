var http = require('http')
var log = require("./log.js")

http.createServer(function(request, response) {
    console.log(request.url)
    if (request.url == "/admin") {
        response.write('<html><body><strong>Admin Page</strong></body></html>')

    } else {
        response.write('<html><body><strong>HOME PAGE</strong></body></html>')

    }

    response.end(' END')

}).listen(8080)

log.information('Server went live')