import React from "react";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Album from "../Album/Album";
const Section = ({ albums, type }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{`${type == "top" ? "Top" : "New"} Albums`}</Typography>
        <Button sx={{ color: "#34c94b" }}>Collapse</Button>
      </Stack>

      <Grid2 container spacing={4} sx={{ margin: "10px 0" }}>
        {albums.map(({ id, image, follows, title }) => (
          <Grid2 size={1.7} key={id}>
            <Album image={image} follows={follows} title={title} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Section;
