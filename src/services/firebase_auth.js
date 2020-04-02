import firebase from "./firebase";

export async function createUser(email, password) {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(newUser => {
      let emailName = email.split("@");
      let username = emailName.length === 2 ? emailName[0] : null;

      let userData = {
        id: newUser.user.uid,
        name: username,
        email: email,
        admin: 0,
        imgUrl: null,
        favorites: []
      };

      createUserData(userData);

      return newUser;
    })
    .catch(err => {
      return err;
    });
}

async function createUserData(data) {
  await firebase
    .firestore()
    .collection("users")
    .doc(data.id)
    .set(data)
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log("NAO FOI POSSIVEL INSERIR DADOS NO FIRESTORE", err);
      return err;
    });
}

export async function signInEmailPassword(email, password) {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    })
    .catch(err => {
      console.log("ERRO LOGIN USUARIO", err);
      return err;
    });
}

export async function signOut() {
  await firebase.auth().signOut();
}

export async function getDataUser(id) {
  return (
    await firebase
      .firestore()
      .collection("users")
      .doc(id)
      .get()
  ).data();
}
