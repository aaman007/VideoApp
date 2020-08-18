import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading..</div>

    const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSrc} allowFullScreen />
            </div>
            <div className="ui segment">
                <div className="header"> 
                    <h4> {video.snippet.title} </h4>
                </div>
                <p> { video.snippet.description } </p>
            </div>
        </div>
    );
}

export default VideoDetail;