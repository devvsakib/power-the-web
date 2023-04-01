import React, { useState } from 'react';
import './videoPlayer.css';
export default function VideoPlayer() {
    const videos = {
        deer:
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
        snail:
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
        cat:
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
        spider:
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
    };
    const [currentVideo, setCurrentVideo] = useState("deer");


    const videoTitles = Object.keys(videos);

    // console.log(Object.keys(videos))
    console.log(videos[currentVideo]);

    return (


        <div className="container6">
            <h1>Project 6: Video Player</h1>
            <div className="selection">
                {
                    videoTitles.map(title => {

                        return (


                            <label key={title} className="radioButton">
                                <input type="radio" id={title} value={title} name="title" onClick={(e) => setCurrentVideo(e.target.value)} />
                                {title}
                            </label>


                        )
                    })
                }
            </div>
            <video controls autoPlay={true} src={videos[currentVideo]} >


            </video>
        </div >






    )
}
