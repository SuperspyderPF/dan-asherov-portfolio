import React, { useEffect, useState } from "react";
import logo from "../../assets/images/dan-asherov.png";
import { Typography, Box } from "@mui/material";
import { LinkedInIcon, YouTubeIcon, GitHubIcon } from "../../assets/SVG";
import { MobileView, BrowserView } from "react-device-detect";
import { MobileAboutMePage } from ".";

const AboutMePage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/dan-asherov-8292962a9", "_blank");
  };

  const hanleYouTubeClick = () => {
    window.open("https://www.youtube.com/@algoprepmaster7310/videos", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/SuperspyderPF", "_blank");
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
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
          <MobileAboutMePage />
        ) : (
          <Box>
            <Box display="flex">
              <img
                style={{ marginTop: 50, marginLeft: 50 }}
                src={logo}
                alt="Logo"
              />
              <Typography
                position="absolute"
                variant="h3"
                gutterBottom
                marginTop={5}
                sx={{
                  textTransform: "none",
                  fontFamily: "Open Sans, sans-serif",
                  fontWeight: 800,
                  marginLeft: 60,
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                About Me
              </Typography>
              <Typography
                sx={{
                  textTransform: "none",
                  textAlign: "left",
                  marginTop: 20,
                  marginLeft: 5.5,
                }}
              >
                I'm a well-rounded software engineer proficient in frontend,
                backend, mobile, cloud, and DevOps technologies. With extensive
                experience in startups, I've led projects, mentored engineers,
                and streamlined processes for optimal efficiency. My dedication
                to crafting user-centric solutions is complemented by a
                commitment to robust, scalable code. <br />
                <Box sx={{ marginTop: 2 }}>
                  <LinkedInIcon onClick={handleLinkedInClick} />
                  <YouTubeIcon
                    onClick={hanleYouTubeClick}
                    style={{ marginLeft: 2 * 8 }}
                  />
                  <GitHubIcon
                    onClick={handleGitHubClick}
                    style={{ marginLeft: 2 * 8 }}
                  />
                </Box>
              </Typography>
            </Box>
          </Box>
        )}
      </BrowserView>
      <MobileView>
        <MobileAboutMePage />
      </MobileView>
    </>
  );
};

export default AboutMePage;
