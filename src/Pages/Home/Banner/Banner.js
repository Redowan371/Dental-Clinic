import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import chairBg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box, textAlign } from "@mui/system";

const bannerBg = {
  background: `url(${chairBg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 450,
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          style={{ ...verticalCenter, textAlign: "left" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography sx={{ fontWeight: 600 }} variant="h3">
              Your New Smile <br /> Start Here
            </Typography>
            <Typography
              sx={{ fontSize: 14, color: "#555", fontWeight: 300 }}
              variant="h6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ratione aliquam consequuntur sequi debitis temporibus natus et
              voluptatem quam amet?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#0AF7EF" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid
          style={{ ...verticalCenter, margin: "0 auto" }}
          item
          xs={12}
          md={6}
        >
          <img style={{ width: 400 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
