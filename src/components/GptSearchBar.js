import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black grid grid-cols-12 w-1/2">
                <input className="p-4 m-4 col-span-9" type="text" placeholder={lang[langKey].gptSearchBoxPlaceholder} />
                <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;