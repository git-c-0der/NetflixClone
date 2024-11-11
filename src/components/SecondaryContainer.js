import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies?.movies);

    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-12">
                <MovieList title={"Now Playing"} movies={movies}/>
                <MovieList title={"Trending"} movies={movies}/>
                <MovieList title={"Popular"} movies={movies}/>
                <MovieList title={"Horror Movies"} movies={movies}/>
                <MovieList title={"Web Series"} movies={movies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;