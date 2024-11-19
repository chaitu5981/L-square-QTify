import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";

import Album from "../Album/Album";
import Carousel from "../Carousel/Carousel";
const Section = ({ albums, type }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Box sx={{ padding: "20px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{`${type == "top" ? "Top" : "New"} Albums`}</Typography>
        <Button
          sx={{ color: "#34c94b", textTransform: "none" }}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show All" : "Collapse"}
        </Button>
      </Stack>
      {collapsed ? (
        <Carousel items={albums} />
      ) : (
        <Grid2 container spacing={4} sx={{ margin: "10px 0" }}>
          {albums.map(({ id, image, follows, title }) => (
            <Grid2 size={{ sm: 4, md: 2.4, lg: 1.7 }} key={id}>
              <Album image={image} follows={follows} title={title} />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Box>
  );
};

export default Section;
