import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import axios from "axios";
import Section from "../components/Section/Section";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Hero />
      <Section type="top" />
      <div className={styles.line}></div>
      <Section type="new" />
      <div className={styles.line}></div>
      <Section type="songs" />
    </div>
  );
};

export default Home;
