import { NETFLIX_LOGIN_BACKGROUND } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={NETFLIX_LOGIN_BACKGROUND} alt="background"/>            
            </div>
            <GptSearchBar/>
            <GptSearchSuggestions/>
        </div>
    )
}

export default GptSearch;