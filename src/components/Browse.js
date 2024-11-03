import Header from "./Header";
import useMoviesData from "../hooks/useMoviesData";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useMoviesData();

    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>

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