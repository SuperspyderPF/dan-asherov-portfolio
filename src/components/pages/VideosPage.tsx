import React, { useState, useEffect } from "react";
import { MobileVideosPage } from "./";
import { Typography } from "@mui/material";
import YouTube, { YouTubePlayer } from "react-youtube";
import { BrowserView, MobileView } from "react-device-detect";

const VideosPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const onReady = (event: { target: YouTubePlayer }) => {
    event.target.pauseVideo();
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <BrowserView>
        {isMobile ? (
          <MobileVideosPage />
        ) : (
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
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4 * 8,
              }}
              videoId="XG-m9d_Kqb0"
              opts={opts}
              onReady={onReady}
            />
            <YouTube
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4 * 8,
              }}
              videoId="V52RteeXLrI"
              opts={opts}
              onReady={onReady}
            />
            <YouTube
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4 * 8,
              }}
              videoId="mW-2ud6BPoM"
              opts={opts}
              onReady={onReady}
            />
            <YouTube
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4 * 8,
              }}
              videoId="ZGApegshrHY"
              opts={opts}
              onReady={onReady}
            />
            <YouTube
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4 * 8,
              }}
              videoId="uQX5Dhl9Xwg"
              opts={opts}
              onReady={onReady}
            />
            <YouTube
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 4 * 8,
              }}
              videoId="43E9FDjTJBM"
              opts={opts}
              onReady={onReady}
            />
          </>
        )}
      </BrowserView>
      <MobileView>
        <MobileVideosPage />
      </MobileView>
    </>
  );
};

export default VideosPage;
