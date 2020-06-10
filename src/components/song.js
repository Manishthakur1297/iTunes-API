import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Song = ({song}) => {

    const getTrackName = () => {
        return song.trackName || '';
    }

    const getArtist = () => {
        return song.artistName || '';
    }
    
    const getAlbum = () => {
        return song.collectionName || '';
    }
    
    const getYear = () => {
        return song.releaseDate.split('-')[0] || '';
    }
    
    const getThumbnail = () => {
        return song.artworkUrl100.replace('100x100', '200x200') || ''
    }

    return (
        <Card
            hoverable
            style={{ width: "250px", padding: "20px", margin: "15px"}}
            cover={<img alt={getTrackName()} src={getThumbnail()} 
            style={{ height: "250px"}}/>}
        >
            <hr />
            <Meta title={getTrackName()} description={getAlbum()}/>
        </Card>
    )}


export default Song;