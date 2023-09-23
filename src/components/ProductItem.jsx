import React from "react";
import { Grid, Card, CardContent, Button, Rating, Badge } from "@mui/material";

export const ProductItem = ({ item }) => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} align="center">
          <Grid item xs={12}>
            <Badge badgeContent={`$${item.price}`} color="secondary">
              <img src={item.image} width="200px" height="200px" />
            </Badge>
          </Grid>

          <Grid item xs={12}>
            {item.title.slice(0, 25)}...
          </Grid>
          <Grid item xs={12}>
            {item.description.slice(0, 30)}...
          </Grid>
          <Grid item xs={8}>
            <Rating value={item.rating.rate} />
          </Grid>
          <Grid item xs={4}>
            {item.rating.count}
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              Add to cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
