const VideoTitle = (props) => {
    const {title, desc} = props;

    return (
        <div className="pt-[20%] px-20 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{desc}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">▶️ Play</button>
                <button className="mx-4 bg-white p-4 px-12 text-xl bg-opacity-20 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;