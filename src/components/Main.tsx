import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import Header from "./BP-components/Header";
import Photos from "./Photos";
import { useNavigate, Routes, Route } from "react-router";
import Nav from "./Nav";
import Login from "./BP-components/Login";
import Deals from "./BP-components/Deals";
import Signup from "./BP-components/Signup";
import Verify from "./BP-components/Verify";
import Profile from "./BP-components/Profile";

//components

function Main() {
  const navigate = useNavigate();
  const endPoint = useAppSelector((state) => state.photo.tabSelected);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event && event.origin === "http://localhost:4200") {
        const body = JSON.parse(event.data);
        console.log(body);
        const { userAction = null } = body;
        switch (userAction) {
          case "login":
            // Add logic to run here after user clicks on login button
            navigate("/login");
            return;
          case "signup":
            // Add logic to run here after user clicks on signup button
            navigate("/signup");
            return;
          case "loggedin":
            // Add logic to run here after user is logged in
            if (window.location.pathname === "/login") {
              navigate("/deals");
            }
            return;
          case "loggedout":
            // Add logic to run here after user is logged out
            navigate("/login");
            return;
          case "verified":
            // Add logic to run here after user email verification is done
            navigate("/login");
            return;
          case "passwordReset":
            // Add logic to run here after user Password reset is completed
            // window.location.href = "login.html";
            navigate("/login");
            return;
          case "openMyProfile":
            // Add logic to run here to show user's profile page
            navigate("/profile");
            return;
          default:
            navigate("/");
            return;
        }
      }
    });
  }, []);

  return (
    <>
      <Nav />
      <Box component="main">
        <Container maxWidth="xl" disableGutters>
          <div className="mt-10">
            {endPoint === "buyproperly-demo" && <Header />}
            <Routes>
              <Route
                path="/login"
                element={
                  endPoint === "buyproperly-demo" ? <Login /> : <Photos />
                }
              />
              <Route
                path="/deals"
                element={
                  endPoint === "buyproperly-demo" ? <Deals /> : <Photos />
                }
              />
              <Route
                path="/signup"
                element={
                  endPoint === "buyproperly-demo" ? <Signup /> : <Photos />
                }
              />
              <Route
                path="/profile"
                element={
                  endPoint === "buyproperly-demo" ? <Profile /> : <Photos />
                }
              />
              <Route
                path="/"
                element={
                  endPoint === "buyproperly-demo" ? <Verify /> : <Photos />
                }
              />
            </Routes>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default Main;
