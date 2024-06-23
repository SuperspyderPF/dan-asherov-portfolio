import React from "react";
import { Card, CardContent, CardMedia, Button } from "@mui/material";

interface WebPagePreviewProps {
  url: string;
  title?: string;
}

const WebPagePreview = (props: WebPagePreviewProps) => {
  const { url, title } = props;
  return (
    <Card
      style={{
        maxWidth: "80%",
        margin: "auto",
        marginTop: 20,
        border: 10,
        borderRadius: 20,
        boxShadow: "0 14px 18px rgba(0,0,0,0.2)",
      }}
    >
      <CardContent>
        <Button
          color="primary"
          component="a"
          href={url}
          target="_blank"
          sx={{ textTransform: "none" }}
        >
          {title}
        </Button>
      </CardContent>
      <CardMedia
        component="iframe"
        src={url}
        style={{ border: 0, height: 500 }}
        title="Web Page Preview"
      />
    </Card>
  );
};

export default WebPagePreview;
