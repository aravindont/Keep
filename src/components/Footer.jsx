import React from "react";

function Footer() {
  return (
    <div>
      <p
        style={{
          position: "absolute",
          bottom: "0",
          textAlign: "center",
          width: "100%",
        }}
      >
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
