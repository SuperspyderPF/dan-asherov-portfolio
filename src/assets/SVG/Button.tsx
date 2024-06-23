import React from "react";
import { Button } from "@mui/material";

interface SendMessageButtonProps {
  style?: React.CSSProperties;
  onClick?: (e: React.FormEvent) => Promise<void>;
}

const SendMessageButton = (props: SendMessageButtonProps) => {
  const { style, onClick } = props;
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        background: "linear-gradient(25deg, #33c9dc 20%, #5cb2b2 90%)",
        color: "white",
        textTransform: "none",
        fontWeight: 500,
        "&:hover": {
          background: "linear-gradient(25deg, #5cb2b2 20%, #33c9dc 90%)",
        },
        "&:focus": {
          boxShadow: "0 0 0 2px rgba(33, 150, 243, 0.5)",
        },
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      Send Message
    </Button>
  );
};

export default SendMessageButton;
