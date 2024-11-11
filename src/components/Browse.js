import Header from "./Header";
import useMoviesData from "../hooks/useMoviesData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearchView = useSelector(store => store.gpt.showGptSearchView);

    useMoviesData();

    return (
        <div>
            <Header/>
            {
                showGptSearchView ? <GptSearch/> :
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
                </>
            }

            {/*
                - Main Container
                    - Video Background
                    - Video Title
                - Secondary Container
                    - MovieList * n
                        - CardList * n            
            */}
        </div>
    );
}

export default Browse;