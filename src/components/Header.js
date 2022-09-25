// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Call a Friend
      </Typography>
      <Divider>
        <Typography variant="h5" gutterBottom>
          Your friendly contact app
        </Typography>
      </Divider>
    </>
  );
};

export default Header;
