import Client from "./Repository.js";

// TODO we need to set this url in our .env file and access base URL in main repositories file
const resource = "http://localhost:3000/users";

export default {
  get() {
    return Client.get(`${resource}`);
  },
  getUser(id) {
    return Client.get(`${resource}/${id}`);
  },
  create(payload) {
    return Client.post(`${resource}`, payload);
  },
  update(payload, id) {
    return Client.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return Client.delete(`${resource}/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
