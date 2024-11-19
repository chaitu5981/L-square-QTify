import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./Album.module.css";
const Album = ({ image, follows, title }) => {
  return (
    <Box>
      <Card sx={{ borderRadius: "10px" }}>
        <CardMedia
          sx={{ width: "full", height: 200 }}
          image={image}
          component="img"
        />
        <CardActions>
          <Chip label={`${follows} follows`} className={styles.chip} />
        </CardActions>
      </Card>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default Album;
