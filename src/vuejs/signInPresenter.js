/* eslint-disable */

import SignInView from "@/views/signInView";

function SignIn(props){
        return (
            <SignInView
                getPlayers = {getPlayerACB}
            /> 
            
            );

            function getPlayerACB(players){
                props.model.getPlayerFromFirebase(players)
            }
        
    
}

export default SignIn;