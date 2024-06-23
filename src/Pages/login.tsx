import { auth,provider } from "../Config/Firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login = () =>{
    const navigate = useNavigate();
    const signInWithGoogle = async() => {
        const result = await signInWithPopup(auth,provider);
        console.log(result.user.displayName);
        navigate("/");
    }
    
    return(
        
        <div>
            
            <p> Sign in with Google to Continue  </p>
            <button onClick={signInWithGoogle}> Sign in with Google </button>
            
        </div>
        
    );
}