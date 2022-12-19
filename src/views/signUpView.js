/* eslint-disable */

import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";


function SignUpView(props){
 
function stadionCB(){
    let userEmail = document.getElementById('email').value;
    let psw1 = document.getElementById('psw1').value;
    let psw2 = document.getElementById('psw-repeat').value;

   if(psw1!==psw2){
        alert("Yours passwords do not match")
    } else {
    createUserWithEmailAndPassword(getAuth(), userEmail, psw1)
    .then((test)=>{
    window.location.hash = "#stadion"
    alert("Your Registration was successfull")

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      }
      )
  }
    
}
function signInCB(){
  window.location.hash = "#signin"
}
return (
<div id= "test" class="signupForm">
<div class="imgcontainer">
    <img src="https://images.thestar.com/duvLr7tdpMrWyb9mWARrfI3MpP8=/1280x1024/smart/filters:cb(1671409721634)/https://www.thestar.com/content/dam/thestar/sports/worldcup/2022/12/18/best-world-cup-final-ever-sport-superstars-delighted-by-messi-mbapp/lionel_messi.jpg" alt="Avatar" class="avatar"/>
  </div> 
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label><b>Email</b></label>
    <input id="email" type="text" placeholder="Enter Email" name="email" required/>

    <label><b>Password</b></label>
    <input id ="psw1" type="password" placeholder="Enter Password" name="psw1" required/>

    <label><b>Repeat Password</b></label>
    <input id ="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" required/>


    <div class="signbtn">
      <button type="button" class="cancelbtn" onClick={signInCB}>Cancel</button>
      <button type="submit" class="signupbtn" onClick={stadionCB}>Sign Up</button>
    </div>
  </hr>
  </div>

);

};
export default SignUpView;
