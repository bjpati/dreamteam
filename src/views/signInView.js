/* eslint-disable */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set , child, get} from "firebase/database";
import { firebaseModelPromise} from "../firebaseModel";


function SignInView(props){
    function signUpCB(){      
    window.location.hash = "#signUp"
}

function stadionCB(){
  let userEmail = document.getElementById('uname').value;
  let psw1 = document.getElementById('psw').value;


signInWithEmailAndPassword(getAuth(), userEmail, psw1).then((tests) => {
const promise1 = Promise.resolve(firebaseModelPromise());
promise1.then((value) => {
  props.getPlayers(value);
})

window.location.hash = "#stadion"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

return (
<div class="signinForm">
    <p class="welcomePage" ><h3>Welcome to DreamTeam</h3>
    <p>
    To use website: 
    </p>
    <ul>
      <li>
        You have to sign up or to sign in if you already have an account.
      </li>
      <li>
        Choose your own player by click the plus button in the stadion. 
      </li>
      <li>
        Click once on player to show the details
      </li>
      <li>
        To replace the player, you can drag the player which you have already in stadion. 
      </li>
    </ul>
    </p>
    <div class="imgcontainer">
    <img src="https://images.thestar.com/duvLr7tdpMrWyb9mWARrfI3MpP8=/1280x1024/smart/filters:cb(1671409721634)/https://www.thestar.com/content/dam/thestar/sports/worldcup/2022/12/18/best-world-cup-final-ever-sport-superstars-delighted-by-messi-mbapp/lionel_messi.jpg" class="avatar"/>
  </div>
  {/* Inspiration of signin design from "www.w3schools.com" */}
  <div class="container">
    <label><b>Email</b></label>
    <input id="uname" type="text" placeholder="Enter your email" name="uname" required/>

    <label><b>Password</b></label>
    <input id ="psw" type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" onclick={stadionCB}>Login</button>
  </div>

  <div class="container" style="background-color:#f1f1f1">
  <button type="button" onclick={signUpCB}>Sign Up Here!</button>
  </div>
  </div>
);

};
export default SignInView;
 
