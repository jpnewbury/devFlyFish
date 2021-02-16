import React from "react";
import ReactPlayer from "react-player";

function Video(props) {
  return (
    <div>
      <ReactPlayer controls="true" url={props.link} />
    </div>
  );
}

export default Video;
