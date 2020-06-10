import React, { useState } from 'react';
import SearchBox from './SearchBox';
import Song from './song'

import { Layout } from 'antd';

const { Header, Content } = Layout;

const App = () => {

  const [songs, setSongs] = useState([])
  
  const handleSongs = (songs) => {
      setSongs(songs)
  }

    return (
      <Layout>
        <Header>
          <h2 style={{textAlign:"center", color:"white" }}>iTunes API</h2>
        </Header>
        <Content style={{background:"#eee" }}>
          <SearchBox handleSongs={handleSongs}/>
          <hr />
          </Content>
          <Content>
            {songs.length <= 0 ? <p style={{padding: "20px", textAlign: "center", color: "red"}}>"No Music Found! Search for Song Name in Search Bar!"</p> : 
          <div>
          { songs.map(song => (
            <div style={{display: "inline-block"}} key={song.trackId}>
              <Song song={song} />
            </div>
          ))}
          </div>
      }
        </Content>
      </Layout>
    );
};

export default App;