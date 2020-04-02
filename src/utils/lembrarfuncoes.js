// FUNÇÂO LISTEN SE TIVER USUARIO ONLINE BUSCA OS;
// DADOS NO BANCO DE DADOS E INSERI NO STATE DO USUARIO NO REDUX;
// SE NAO TIVER USUARIO ELE SETA O STATE EM NULO

// useEffect(() => {
//     firebase.auth().onAuthStateChanged(state => {
//       if (state != null) {
//         getDataUser(state.uid).then(data => {
//           dispatch(handleGetUser(data));
//           dispatch(handleGetToken(data.id));
//         });
//         history.push("/");
//       }

//       dispatch(handleGetUser(null));
//           dispatch(handleGetToken(null));
//     });
//   }, []);

// ____________________________________________________________________________

//CORES

// #6B7A8F
// #F7882F
// #F7C331
// #DCC7AA

// #23231f
