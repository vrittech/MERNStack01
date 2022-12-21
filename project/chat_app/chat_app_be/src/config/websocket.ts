import http from "http";
import app from "./app";
import WebSocket from "ws";
import MemberService from "../conversation/member/member.service";
import MemberModel from "../conversation/member/member";
import socketService from "../utils/SocketService";
const server = http.createServer(app);

const WSS = new WebSocket.Server({ clientTracking: false, noServer: true });

server.on('upgrade', async function (request:any, socket, head) {
//Parse the header
const {authorization} = request.headers;
if(!authorization){
  socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
  socket.destroy();
  return;
}
//Check our user with the database;
const memberService = new MemberService(MemberModel);
const member = await memberService.getMember({_id : authorization})
if(!member){
  socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
  socket.destroy();
  return;
}
request.user_id  = member._id
    WSS.handleUpgrade(request, socket, head, function (ws) {
      WSS.emit('connection', ws, request);
    });
});


WSS.on("connection", (ws, req:any) => {
  
  //Store the connection object to the ws
  socketService.insertClient(req.user_id, ws)
  
  ws.on("message", (message) => {});
  ws.on("close", () => {
  });
});

export default server;
