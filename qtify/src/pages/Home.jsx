import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import axios from "axios";
import Section from "../components/Section/Section";
import styles from "./Home.module.css";
const Home = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchTopAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchNewAlbums = async () => {
    try {
      const res = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbums(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
  }, []);
  return (
    <div>
      <Hero />
      <Section albums={topAlbums} type="top" />
      <div className={styles.line}></div>
      <Section albums={newAlbums} type="new" />
    </div>
  );
};

export default Home;
