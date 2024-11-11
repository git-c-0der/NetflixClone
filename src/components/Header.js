import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleGptSearchView } from "../redux/gptSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {}
        ).catch((error) => {
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Sign In
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid:uid,
                    email:email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
                navigate("/browse");
            }
            // Sign Out
            else{
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="w-screen absolute bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
            <img className="w-48 my-2" src={NETFLIX_LOGO} alt="logo"/>
            {user && (<div className="flex p-2 m-2">
                <button onClick={handleGptSearch} className="bg-purple-700 text-white mx-4 my-2 px-4 py-2 rounded-lg hover:opacity-80">GPT Search</button>
                <img className="h-12 w-12 m-2" src={USER_ICON} alt="usericon"/>
                <button onClick={handleSignOut} className="font-bold text-white text-lg">(Sign Out)</button>
            </div>)}
            
        </div>
    );
}

export default Header;