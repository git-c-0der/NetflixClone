import { useEffect } from "react";
import {API_OPTIONS} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../redux/movieSlice";

const useTrailerData = (movieId) => {
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US';
    const getTrailerVideo = async () => {
        const data = await fetch(url, API_OPTIONS);
        const json = await data.json();
        const trailerVideos = json.results.filter(video => video.type==="Trailer");
        const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];
        dispatch(addTrailer(trailer));
        console.log(trailer);
    }

    useEffect(() => {
        getTrailerVideo();
    }, []);
}

export default useTrailerData;