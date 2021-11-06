import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(56, 62, 85,.9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "100px",
};

const AppoinmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "400px", marginTop: "-120px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography variant="h6" style={{ color: "#0AF7EF" }}>
              Appointments
            </Typography>
            <Typography sx={{ my: 3 }} variant="h4" style={{ color: "white" }}>
              Make an Appointments Today
            </Typography>
            <Typography
              sx={{ mb: 3 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              soluta atque molestias iusto omnis! Hic corporis in voluptate at
              et!
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#0AF7EF" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
