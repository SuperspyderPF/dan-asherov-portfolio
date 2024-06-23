import React from "react";
import { Typography } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";

const MobileVideosPage = () => {
  const opts = {
    height: "190",
    width: "300",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    const player = event.target;
    if (player && typeof player.pauseVideo === "function") {
      player.pauseVideo();
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        marginTop={5}
        sx={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800 }}
      >
        Videos
      </Typography>
      <YouTube
        style={{ display: "flex", justifyContent: "center" }}
        videoId="Bq0nrIy7cf4"
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        style={{ display: "flex", justifyContent: "center", marginTop: 4 * 8 }}
        videoId="XG-m9d_Kqb0"
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        style={{ display: "flex", justifyContent: "center", marginTop: 4 * 8 }}
        videoId="V52RteeXLrI"
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        style={{ display: "flex", justifyContent: "center", marginTop: 4 * 8 }}
        videoId="mW-2ud6BPoM"
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        style={{ display: "flex", justifyContent: "center", marginTop: 4 * 8 }}
        videoId="ZGApegshrHY"
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        style={{ display: "flex", justifyContent: "center", marginTop: 4 * 8 }}
        videoId="uQX5Dhl9Xwg"
        opts={opts}
        onReady={onReady}
      />
      <YouTube
        style={{ display: "flex", justifyContent: "center", marginTop: 4 * 8 }}
        videoId="43E9FDjTJBM"
        opts={opts}
        onReady={onReady}
      />
    </>
  );
};

export default MobileVideosPage;
