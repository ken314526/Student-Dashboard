import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import data from "../../data/dummyData";
import React from "react";
import Header from "../../components/Header";

export default function Data() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "S.No." },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-columnn--cell",
    },
    {
      field: "nameOfSociety",
      headerName: "Name Of Society",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
    },
    {
      field: "district",
      headerName: "District",
      flex: 1,
    },
    {
      field: "dateOfRegistration",
      headerName: "Registration Date",
      flex: 1,
    },
    {
      field: "areaOfOperation",
      headerName: "Area Of Operation",
      flex: 1,
    },
    {
      field: "sectorType",
      headerName: "Sector Type",
      flex: 1,
    },
  ];

  return (
    <Box>
      <Header title={"Student Data"} subtitle={""} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-columnn--cell": {
            color: colors.greenAccent[300],
            fontSize: "bold",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <div style={{ height: "75%", width: "100%" }}>
          <DataGrid rows={data} columns={columns} />
        </div>
      </Box>
    </Box>
  );
}
