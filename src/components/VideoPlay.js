


const VideoPlay = ({video}) => {
    return(
        <div>
            {
                video==null ? <h1>Loading..</h1> : (
                <div>
                <iframe width="100%" height="450" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
                <h2>{video.snippet.title}</h2>    
                <p><strong>Description: </strong>{video.snippet.description}</p>  
                </div>
                ) 
            }
        </div>
    )
}
export default VideoPlay;