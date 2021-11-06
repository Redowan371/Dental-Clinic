import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nobis tenetur consequatur distinctio voluptas minus cupiditate omnis eaque quod reprehenderit!",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nobis tenetur consequatur distinctio voluptas minus cupiditate omnis eaque quod reprehenderit!",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nobis tenetur consequatur distinctio voluptas minus cupiditate omnis eaque quod reprehenderit!",
    img: teeth,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500, color: "info.main", mt: 5 }}
          variant="h6"
          component="div"
        >
          OUR SERVICE
        </Typography>
        <Typography
          sx={{ fontWeight: 600, my: 3 }}
          variant="h4"
          component="div"
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={Service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
