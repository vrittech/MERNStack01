import { WebSocket } from "ws";

export interface IClient {
  user_id: string;
  socket: WebSocket;
}

export interface ISocketService { 
    insertClient(user_id:string, ws: WebSocket):void,
    getClient(user_id: string): IClient | undefined,
    removeClient(user_id: string) : IClient[]
}
class SocketService implements ISocketService {
  private clients: IClient[] = [];

  insertClient(user_id: string, ws: WebSocket): WebSocket {
    //Check if the client exists;
    const client = this.getClient(user_id);
    if (client) {
      //Remove the client
      const newClients = this.removeClient(user_id);
      this.clients = [...newClients];
    }
    this.clients = [...this.clients, { user_id, socket: ws }];
    return ws;
  }

  getClient(user_id: string): IClient | undefined {
    //Check if the client exists;
    const client = this.clients.find((client) => client.user_id.toString() === user_id);
    return client;
  }

  removeClient(user_id: string) : IClient[] {
    return this.clients.filter((client) => client.user_id !== user_id);
  }
}

const socketService  = new SocketService();
export default socketService;
