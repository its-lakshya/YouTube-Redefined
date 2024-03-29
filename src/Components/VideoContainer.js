import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const Json = await data.json();
    setVideos(Json.items);
  };

  if (videos)
    return (
      <div className="flex flex-wrap justify-center mt-4 w-full" >
        {videos.map((video) => {
          return (
            <Link to={"/watch?v="+video.id} key={video.id}>
              <VideoCard info={video} />
            </Link>
          );
        })}
      </div>
    );
};

export default VideoContainer;
