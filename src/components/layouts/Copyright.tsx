import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography
      sx={{ pt: 4 }}
      variant="body2"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://imharsh.web.app/">
        Harsh
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
