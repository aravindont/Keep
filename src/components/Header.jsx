import React from "react";
import Paper from "@mui/material/Paper";
function Header() {
  return (
    <Paper
      style={{ padding: "5px", display: "flex", gap: "1rem" }}
      square
      elevation={3}
    >
      <img
        style={{ width: "50px" }}
        src="https://www.pngkey.com/png/full/270-2705388_free-png-keep-icon-android-kitkat-png-images.png"
        alt="logo"
      />
      <h1 style={{ margin: "0", fontFamily: "cursive" }}>Keep</h1>
    </Paper>
  );
}

export default Header;
