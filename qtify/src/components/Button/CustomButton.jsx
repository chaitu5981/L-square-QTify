import React from "react";
import Button from "@mui/material/Button";
import styles from "./CustomButton.module.css";
const CustomButton = ({ children }) => {
  return (
    <Button variant="contained" className={styles.btn}>
      {children}
    </Button>
  );
};

export default CustomButton;
