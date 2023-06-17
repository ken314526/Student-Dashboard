import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import Data from "../data";

export default function DashBoard() {
  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>
      <Data />
    </Box>
  );
}
