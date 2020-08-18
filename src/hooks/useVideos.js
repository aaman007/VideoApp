import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyA6rOnIXj-AvVQhkFW3nRo7kVI0VNqC7sE';

const useVideo = (defaultTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        searchVideos(defaultTerm);

    }, [defaultTerm]);

    const searchVideos = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term,
                part: 'snippet',
                maxResults: 10,
                type: 'video',
                key: KEY
            }
        });

        setVideos(response.data.items);
    }

    return [videos, searchVideos];
}

export default useVideo;