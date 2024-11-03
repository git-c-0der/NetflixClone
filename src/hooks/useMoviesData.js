import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../redux/movieSlice";
import { useEffect } from "react";


const useMoviesData = () => {
    const dispatch = useDispatch();

    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const getNowPlayingMovies = async () => {
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        dispatch(addMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}

export default useMoviesData;