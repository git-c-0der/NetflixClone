import { signOut } from "firebase/auth";
import { NETFLIX_LOGO, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div className="w-screen absolute bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
            <img className="w-48 my-2" src={NETFLIX_LOGO} alt="logo"/>
            {user && (<div className="flex p-2 m-2">
                <img className="h-12 w-12 m-2" src={USER_ICON} alt="usericon"/>
                <button onClick={handleSignOut} className="font-bold text-white text-lg">(Sign Out)</button>
            </div>)}
            
        </div>
    );
}

export default Header;