import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";

const Single = () => {
  const [image, setImage] = useState(""); //store image data
  const imgData = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    /* inner left grid  */
    "https://i.ibb.co/djynfrx/280600596-10158597157581891-4839986950427977431-n.jpg",
    // inner middle grid
    "https://i.ibb.co/7NbN2GD/istockphoto-1157244225-612x612.jpg",
    // inner bottom grid
  ];
  // automatice setup image
  useEffect(
    () =>
      setImage(
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      ),
    []
  );

  return (
    <>
      <main>
        <Container>
          {/* main grid  */}
          <Grid container>
            {/* left grid  */}
            <Grid item xs={12} md={5} sx={{ padding: 1 }}>
              {/* left inner main grid  */}
              <Grid container spacing={1}>
                {/* inner left grind  */}
                <Grid item xs={2}>
                  {/* left inner grid main grid  */}
                  <Grid spacing={2}>
                    {/* top grid  */}
                    {imgData.map((val, id) => (
                      <Grid key={id} item>
                        <Box
                          component="img"
                          style={{ cursor: "pointer" }}
                          sx={{
                            height: "50px",
                            width: 1,
                            border: "1px solid #686de0",
                          }}
                          alt="The house from the offer."
                          src={val}
                          onMouseEnter={() => setImage(val)}
                          onClick={() => setImage(val)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                {/* inner right grid  */}
                <Grid item xs={10}>
                  <Box container sx={{ width: 1, height: "400px" }}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: image,
                        },
                        largeImage: {
                          src: image,
                          width: 1200,
                          height: 1800,
                        },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* right grid  */}
            <Grid item xs={12} md={7} sx={{ padding: 2 }}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  RICK AND MORTY Anatomy Park Logo Snapback Baseball Hat
                </Typography>
                {/* details  */}
                <Typography variant="subtitles1" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  unde id ab dignissimos beatae labore aut voluptatem, excepturi
                  molestias voluptas corrupti corporis nemo possimus nulla minus
                  perspiciatis eveniet magnam. Vel aliquid numquam molestiae,
                  ipsam earum atque incidunt nostrum sed est dolor veritatis
                  itaque, facilis impedit vero explicabo dolores mollitia illum
                  at ullam? Et, voluptate dolorem! Tempore corrupti molestiae
                  maxime cupiditate cum eaque voluptates iure, porro doloribus
                  voluptas. Illo voluptatum eaque voluptate esse expedita
                  debitis tempore beatae delectus, quia ipsa aperiam iusto
                  fugiat excepturi incidunt aliquam, eos quam. Voluptatum
                  sapiente ad quae beatae quisquam, illum molestias, odit omnis
                  natus nobis esse!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Single;
