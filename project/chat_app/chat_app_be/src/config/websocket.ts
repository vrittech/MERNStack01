import http from "http";
import app from "./app";
import WebSocket from "ws";
const server = http.createServer(app);

const WSS = new WebSocket.Server({ server });

WSS.on("connection", (ws, req) => {
  console.log("Connected to the client");

  ws.on("message", (message) => {});
  ws.on("close", () => {
  });
});

export default server;
