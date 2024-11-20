import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import Album from "../Album/Album";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
const Section = ({ type }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [media, setMedia] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [tab, setTab] = useState("all");
  const fetchMedia = async () => {
    console.log(type);
    let api, api1;
    if (type === "songs") {
      api = "https://qtify-backend-labs.crio.do/songs";
      api1 = "https://qtify-backend-labs.crio.do/genres";
    } else api = `https://qtify-backend-labs.crio.do/albums/${type}`;
    try {
      const res = await axios.get(api);
      setMedia(res.data);
      if (type === "songs") {
        const res1 = await axios.get(api1);
        setGenres(res1.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMedia();
  }, []);
  const handleChange = (e, newValue) => {
    setTab(newValue);
    if (newValue === "all") return;
    console.log(media);
    const songs1 = media.filter((song) => song.genre.key === newValue);
    console.log(songs1);
    setFilteredSongs(songs1);
  };
  if (type === "songs")
    return (
      <Box sx={{ padding: "20px" }}>
        <Typography>Songs</Typography>
        <TabContext value={tab}>
          <TabList
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="primary"
          >
            <Tab id="all" label="All" value="all" sx={{ color: "white" }} />
            {genres.map(({ key, label }) => (
              <Tab
                id={key}
                key={key}
                label={label}
                value={key}
                sx={{ color: "white" }}
              />
            ))}
          </TabList>
          <TabPanel value="all">
            <Carousel items={media} type={type} />
          </TabPanel>
          {genres.map(({ key, label }) => (
            <TabPanel key={key} value={key}>
              <Carousel items={filteredSongs} type={type} />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    );
  else
    return (
      <Box sx={{ padding: "20px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{`${type === "top" ? "Top" : "New"} Albums`}</Typography>
          <Button
            sx={{ color: "#34c94b", textTransform: "none" }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "Show All" : "Collapse"}
          </Button>
        </Stack>
        {collapsed ? (
          <Carousel items={media} type={type} />
        ) : (
          <Grid2 container spacing={4} sx={{ margin: "10px 0" }}>
            {media.map(({ id, image, follows, title }) => (
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
