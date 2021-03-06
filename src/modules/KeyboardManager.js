const src = "http://localhost:5002";

export default {
  get(resource, id) {
    return fetch(`${src}/${resource}/${id}`).then(e => e.json());
  },
  getAllBuilds() {
    return fetch(
      `${src}/build?_expand=case&_expand=pcb&_expand=keycap&_expand=keyswitch&_expand=user`
    ).then(e => e.json());
  },
  post(resource, newPart) {
    return fetch(`${src}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPart)
    }).then(e => e.json());
  },
  delete(id) {
    return fetch(`${src}/build/${id}`, {
      method: "DELETE"
    }).then(e => e.json());
  },
  edit(resource, editedPart) {
    return fetch(`${src}/${resource}/${editedPart.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPart)
    }).then(e => e.json());
  },
  getAll(resource) {
    return fetch(`${src}/${resource}`).then(e => e.json());
  },
  login(email, password) {
    return fetch(`${src}/users?email=${email}&password=${password}`).then(
      response => response.json()
    );
  }
};
