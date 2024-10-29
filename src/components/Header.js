import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10">
            <img className="w-48 my-2" src={NETFLIX_LOGO} alt="logo"/>
            
        </div>
    );
}

export default Header;