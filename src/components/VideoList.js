import { useEffect } from "react";


const VideoList = ({videos,videoChosen}) => {

    useEffect(()=>{
        videoChosen(videos[0]);
    },[videos])

    return(
        <div>
            {
                videos.map((video,index)=>(
                    <div
                    key={index}
                    onClick={()=>videoChosen(video)}
                    className="video-list-content"
                    style={{cursor:'pointer'}}
                    >
                        <img className="video-list-content-img" src={video.snippet.thumbnails.high.url}></img>
                        <div>
                        <h4>{video.snippet.title}</h4>
                        <p style={{margin:'0',fontSize:'14px'}}>{video.snippet.channelTitle}</p>
                        </div>    
                    </div>
                ))
            }
        </div>
    )
}

export default VideoList;