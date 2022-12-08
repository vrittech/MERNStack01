const clients = [];
const Clients = {
  getClient: (key) => {
    return clients[key];
  },
  setClient: (key, ws) => {
    clients[key] = ws;
  },
  removeClient: (key) => {
    delete clients[key];
  },
  getAllClients: () => {
    return clients;
  },
};

module.exports = Clients;