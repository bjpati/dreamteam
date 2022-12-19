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


signInWithEmailAndPassword(getAuth(), userEmail, psw1)
  .then((tests) => {
const promise1 = Promise.resolve(firebaseModelPromise());
promise1.then((value) => {
  props.getPlayers(value);
  console.log(value);
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
    <p class="welcomePage" > HERE will we write information about the page</p>
    <div class="imgcontainer">
    <img src="https://media.istockphoto.com/id/1202466316/photo/football-player-in-the-stadium.jpg?s=612x612&w=0&k=20&c=Ksh1P1leYpL3Y3-hBlUasljBV0W0MOihtKtfhOajsGw=" class="avatar"/>
  </div>

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
 