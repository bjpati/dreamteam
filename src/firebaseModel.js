/* eslint-disable */

import { getDatabase, ref, set , child, get} from "firebase/database";
import { getAuth } from "firebase/auth";


function observerRecap(model){
  function addingObserverCB (payload){
      console.log(payload)
  }
  model.addObserver(addingObserverCB);  

}

function firebaseModelPromise(){
  let dreamTeam =[];
  const auth = getAuth();
  const user = auth.currentUser;
  const dbRef = ref(getDatabase());
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      let x = get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          dreamTeam = (snapshot.val().players);
          return dreamTeam;
        
        } else {
          console.log("No data available");
        }
      })
      return x; 
}



function updateFirebaseFromModel(model) {
  function uppdateObserverFirebaseCB (payload){

  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();

  if (payload && payload.addPlayer){
    if (user){
      set(ref(db, "users/" + user.uid), {
        players: model.players
      });
  }
  }
}
  model.addObserver(uppdateObserverFirebaseCB);
}



export  {observerRecap , updateFirebaseFromModel,firebaseModelPromise };
