import React from "react";
import { Box, Container } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import Header from "./BP-components/Header";
import Nav from "./Nav";
import Photos from "./Photos";
import TopButton from "./TopButton";

//components

function Main() {
  const endPoint = useAppSelector((state) => state.photo.tabSelected);

  return (
    <Box component="main">
      <Nav />
      <Container maxWidth="xl" disableGutters>
        {endPoint === "buyproperly-demo" ? <Header /> : <Photos />}
      </Container>
      <TopButton />
    </Box>
  );
}

export default Main;
