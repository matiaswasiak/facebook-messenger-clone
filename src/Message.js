import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "./Message.css";

const Message = ({ username, text }) => {
  return (
    <Card className="message__card" variant="h5" component="h2">
      {username}: {text}
    </Card>
  );
};

export default Message;
