import React from "react";
import { Card, CardContent } from "@mui/material";
import { Home } from "./components/Home";

function App() {
  return (
    <Card sx={{ bgcolor: "#c0c0c0" }}>
      <CardContent>
        <Home />
      </CardContent>
    </Card>
  );
}

export default App;
