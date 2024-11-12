import Header from "./Header";
import useMoviesData from "../hooks/useMoviesData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGptSearchView = useSelector(store => store.gpt.showGptSearchView);

    useMoviesData();

    return (
        <div>
            <Header/>
            {
                showGptSearchView ? <GptSearchPage/> :
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