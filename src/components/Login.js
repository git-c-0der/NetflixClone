import { useRef, useState } from "react";
import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignIn = () => {
        const msg = checkValidateData(email.current.value, password.current.value);
        setErrorMsg(msg);
        if(msg) return;

        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"\n"+errorMessage);
            });

        }else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorCode+"\n"+errorMessage);
            });
        }
    }

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src={NETFLIX_LOGIN_BACKGROUND} alt="background"/>
            
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}}
             className="bg-opacity-80 bg-black w-3/12 p-12 my-40 absolute mx-auto left-0 right-0 text-white rounded-lg">
                <h1 className="text-3xl py-4 font-bold">{isSignInForm? "Sign In":"Sign Up"}</h1>
                {
                    !isSignInForm && <input ref={name} className="p-4 my-2 bg-gray-700 w-full" type="text" placeholder="Full Name"/>
                }
                <input ref={email} className="p-4 my-2 bg-gray-700 w-full" type="text" placeholder="Email or Mobile Number"/>
                <input ref={password} className="p-4 my-2 bg-gray-700 w-full" type="password" placeholder="Password"/>
                <p className="font-bold text-red-500 py-2">{errorMsg}</p>
                <button onClick={handleSignIn}
                className="my-4 p-4 bg-red-600 w-full rounded-md font-bold">{isSignInForm? "Sign In":"Sign Up"}</button>
                <p className="py-2 cursor-pointer" onClick={toggleForm}>
                    {
                        isSignInForm? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now"
                    }
                
                </p>
            </form>
        </div>
        
    );
}

export default Login;