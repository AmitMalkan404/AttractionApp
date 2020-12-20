 const net = require("net");
/*
// Create a socket (client) that connects to the server
var socket = new net.Socket();
socket.connect(5000, "127.0.0.1", function () {
    console.log("Client: Connected to server");
}); */

class mainServer
{
    constructor(port, ip)
    {
        this.port = port
        this.ip = ip
    }

    connectTo() {
        var socket = new net.Socket();
        socket.connect(5000, "127.0.0.1", function () {
            console.log("Client: Connected to server");
        }
        


    
}