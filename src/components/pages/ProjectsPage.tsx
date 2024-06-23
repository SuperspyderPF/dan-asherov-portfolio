import React from "react";
import { WebPagePreview } from "../atoms";
import { Typography } from "@mui/material";

const ProjectsPage = () => {
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        marginTop={5}
        sx={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800 }}
      >
        Web Apps
      </Typography>
      <WebPagePreview
        title="Crypto Price Tracker"
        url="https://meme-84e91.web.app/"
      />
      <WebPagePreview
        title="React Shooter Game"
        url="https://reactreactreact-7747f.web.app/"
      />
      <WebPagePreview
        title="Text Editor"
        url="https://dan-asherov-text-editor.web.app/"
      />
      <WebPagePreview title="CHS Garage" url="https://chs-garage.web.app/#" />
      <WebPagePreview
        title="Mint Seams"
        url="https://mintseams-60351.web.app/#home"
      />
      <WebPagePreview
        title="Twitter URL Converter"
        url="https://media-without-retweet.web.app/"
      />
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        marginTop={5}
        sx={{ fontFamily: "Open Sans, sans-serif", fontWeight: 800 }}
      >
        Mobile Apps
      </Typography>
      <WebPagePreview
        title="Monthly Food Budget Tracker"
        url="https://snack.expo.dev/@algoprepmaster/multi-component-food-spender"
      />
      <WebPagePreview
        title="Twitter URL Converter"
        url="https://snack.expo.dev/@algoprepmaster/cross-platform-twitter-convetor"
      />
      <WebPagePreview
        title="Task Calendar"
        url="https://snack.expo.dev/@algoprepmaster/task-manager"
      />
    </>
  );
};

export default ProjectsPage;
