import { useEffect, useState } from "react"
import youtube from '../apis/youtube'
import { FaSistrix } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const SearchBar = ({addVideos}) => {
    let [search,setSearch] = useState('react-tutorials');

    useEffect(()=>{
        getYoutubeVideos();
    },[])

        const keyDownHandler = event => {
    
          if (event.key === 'Enter') {
            // 👇️ your logic here
            getYoutubeVideos();
          }}


    function getYoutubeVideos(){
        youtube.get("/search",{
            params:{
                q:search,
                type:'video'
            }
        })
        .then((response)=>addVideos(response.data.items))
        .catch((err)=>console.log(err))
    }

    

    return(
        <div className="search-container">
            
            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
            <FaYoutube className="youtube-icon"/>
            <strong style={{fontSize:'20px'}}>YOUTUBE</strong>
            </div>


            <div style={{display:'flex'}}>
               <input type="text"
               onChange={e=>setSearch(e.target.value)}
               value={search}
               className="search-bar"
               onKeyDown={keyDownHandler}
               >
              </input>
              <button className="search-button" onClick={getYoutubeVideos}><FaSistrix className="icon"/></button>
            </div>

            <div><img style={{borderRadius:'50%'}} width={'50px'} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"></img></div>

        </div>

    )
}

export default SearchBar