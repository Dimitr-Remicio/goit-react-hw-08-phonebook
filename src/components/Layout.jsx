import { Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import LoadingPage from "../pages/Loading";
import { Container, CssBaseline, Box, Typography, Link } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          maxWidth: "70%",
          margin: "0 auto",
          marginTop: "20px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default Layout;
