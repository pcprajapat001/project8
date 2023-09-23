import React, { useState } from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";

export const NavList = () => {
  const [data, setData] = useState([
    "Fashion",
    "Cosmatics",
    "Electronics",
    "Accessories",
    "Kids Wear",
  ]);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={2}>
          <NavItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
