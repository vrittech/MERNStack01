import http from "http";
import app from "./app";
import WebSocket from "ws";
import MemberService from "../conversation/member/member.service";
import MemberModel from "../conversation/member/member";
import socketService from "../utils/SocketService";
import url from "url";
const server = http.createServer(app);

const WSS = new WebSocket.Server({ server });

WSS.on("connection", async (ws, request: any) => {
  const { loggedInUser } = url.parse(request.url, true).query;
  if (!loggedInUser) {
    return;
  }
  //Check our user with the database;
  const memberService = new MemberService(MemberModel);
  const member = await memberService.getMember({ _id: loggedInUser });
  if (!member) {
    return;
  }
  if (member._id)
    //Store the connection object to the ws
    socketService.insertClient(member?._id.toString(), ws);

  ws.on("message", (message) => {});
  ws.on("close", () => {});
});

export default server;
