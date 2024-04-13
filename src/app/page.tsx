"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import Copyright from "@/components/layouts/Copyright";
export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Welcome to the Chart Plotting App!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This app plots x and y values in a chart for the first 50 values.
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Task Description:
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          y-axis:{" "}
          <Link href="https://retoolapi.dev/o5zMs5/data" color="secondary">
            https://retoolapi.dev/o5zMs5/data
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          x-axis:{" "}
          <Link href="https://retoolapi.dev/gDa8uC/data" color="secondary">
            https://retoolapi.dev/gDa8uC/data
          </Link>
        </Typography>
        <Link href="/admin/dashboard" color="secondary" component={NextLink}>
          Go to Admin Chart
        </Link>
      </Box>
      <Copyright></Copyright>
    </Container>
  );
}
