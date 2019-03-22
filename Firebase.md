## Firebase

Si las siguientes lineas están comentadas no realiza un volcado de los datos en Firebase.

- import base from "../base";

* En componentDidMount estas lineas

this.ref = base.syncState(`convocatorias`, {
context: this,
state: "convocatorias"
});
this.ref = base.syncState(`novas`, {
context: this,
state: "novas"
});
this.ref = base.syncState(`axenda`, {
context: this,
state: "axenda"
});

- componentWillUnmount() {
  base.removeBinding(this.ref);
  }

Para que firebase funcione tiene que usarse el archivo .env, con las api_key, auth_domain y datebase_url del proyecto de la base de datos.
