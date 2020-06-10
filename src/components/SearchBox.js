import React, {useState, useEffect} from 'react';
// import { Input } from 'antd';

import axios from 'axios';

// const { Search } = Input;


let placeholderText = "Search iTune Music";


const SearchBox = ({ handleSongs }) => {

    const [search, setSearch] = useState("")
    // const [songs, setSongs] = useState([])

    const searchmusic = search => e => {
        e.preventDefault()
        console.log(search)
        let searchString = search.replace(" ", "+")
        axios.get(`https://itunes.apple.com/search?term='${searchString}'&media=music`)
        .then(res => {
            console.log(res.data)
            // setSongs(res.data.results)
            handleSongs(res.data.results)
            // console.log(songs)
      })
    }

    const inputChanged = event => {
        setSearch(event.target.value)
    }

    return (
        <div style={{textAlign: "center", padding:"20px",margin:"20px"}}>
            <input style={{padding:"8px"}}
                placeholder={placeholderText}
                onChange={inputChanged}
                value={search}
            />
            <input style={{padding:"8px"}} type="button" onClick={searchmusic(search)} value="Search"/>

        </div>

    );
}

export default SearchBox;