import axios from 'axios'

const key=process.env.React_APP_YOUTUBE_API_KEY;

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        key:key,
        maxResults:5,
        part:"snippet"
    }
})