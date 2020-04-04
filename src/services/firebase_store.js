import firebase from "./firebase";

export async function addImagem(file, data) {
  const ref = firebase.storage().ref().child("animes_poster");

  await ref
    .child(`${data.title}.png`)
    .put(file)
    .then((upload) => {
      upload.ref.getDownloadURL().then((url) => {
        let newData = {
          ...data,
          imgUrl: url,
        };

        firebase
          .firestore()
          .collection("animes")
          .add(newData)
          .then((doc) => {
            console.log("Anime adicionado com sucesso!");
            return "Anime adicionado com sucesso!";
          })
          .catch((err) => {
            console.log("Erro ao adicionar anime , tente novamente");
            return "Erro ao adicionar anime , tente novamente";
          });
      });
    });
}

export async function getAnimes() {
  return await firebase
    .firestore()
    .collection("animes")
    .orderBy("pos")
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );

  // return await firebase
  //   .firestore()
  //   .collection("animes")
  //   .onSnapshot(function(query) {
  //     query.docs.map(function(docs) {
  //       let snapdata = {
  //         id: docs.id,
  //         ...docs.data
  //       };

  //       return snapdata;
  //     });
  //   });
}

export async function getAnimesDaily() {
  let day = new Date().getDay();

  return await firebase
    .firestore()
    .collection("animes")
    .where("pos", "==", day)
    .where("streaming", "==", 1)
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );
}

export async function getAnimesSeason() {
  return await firebase
    .firestore()
    .collection("animes")
    .where("streaming", "==", 1)
    .get()
    .then((query) =>
      query.docs.map((docs) => ({ id: docs.id, ...docs.data() }))
    );
}

export async function deleteAnime(id) {
  await firebase
    .firestore()
    .collection("animes")
    .doc(id)
    .delete()
    .then((resp) => {
      console.log("ANIME DELETADO", resp);
    });
}

export async function updateAnime(data) {
  await firebase
    .firestore()
    .collection("animes")
    .doc(data.id)
    .update(data)
    .then((resp) => {
      console.log("ANIME EDITADO", resp);
    });
}
