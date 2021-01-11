const express = require("express");

const { ExpressPeerServer } = require("peer");

const app = express();

app.use(express.static("public"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});


const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " + 3000);
});

// peerjs server
const peerServer = ExpressPeerServer(listener, {
  audio: true,
  video: true,
  debug: true,
  path: '/myapp'
});

app.use('/peerjs', peerServer);
