const src = "http://localhost:5002";

export default {
  get(resource, id) {
    return fetch(`${src}/${resource}/${id}`).then(e => e.json());
  },
  getAll() {
    return fetch(
      `${src}/build?_expand=case&_expand=pcb&_expand=keycap&_expand=keyswitch`
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
  delete(resource, id) {
    return fetch(`${src}/${resource}/${id}`, {
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
  }
};
