import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div
      class="d-flex flex-column flex-shrink-0 m-3"
      style={{
        width: "200px",
        height: "100%",
      }}
    >
      <a
        href="/"
        className="d-flex align-items-center p-2 mt-2 mb-5 link-body-emphasis text-decoration-none"
      >
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{
            mb: "5px",
          }}
        >
          Students DashBoard
        </Typography>
      </a>
      <Box paddingLeft={"10%"}>
        {/* <Item title="DashBoard" to="/" icon={<HomeOutlinedIcon />} /> */}
        <Typography
          variant="h2"
          color={colors.grey[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          Pages
        </Typography>
        <ul className="m-2">
          <li className="mt-4 text-decoration-none">
            <Link
              to="/"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Home
            </Link>
          </li>

          <li className="mt-2 text-decoration-none">
            <Link
              to="/name"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Name
            </Link>
          </li>
          <li className="mt-2 text-decoration-none">
            <Link
              to="/nameofsociety"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Name of Societies
            </Link>
          </li>
          <li className="mt-2 text-decoration-none">
            <Link
              to="/address"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Addresses
            </Link>
          </li>
          <li className="mt-2 text-decoration-none">
            <Link
              to="/states"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              State
            </Link>
          </li>
          <li className="mt-2 text-decoration-none">
            <Link
              to="/districts"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Districts
            </Link>
          </li>
          <li className="mt-2 text-decoration-none">
            <Link
              to="/areaofoperation"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Areas of Operations
            </Link>
          </li>
          <li className="mt-2 text-decoration-none">
            <Link
              to="/sectortypes"
              style={{ textDecoration: "none", color: colors.primary[100] }}
            >
              Sector Types
            </Link>
          </li>
        </ul>
      </Box>
    </div>
  );
}
