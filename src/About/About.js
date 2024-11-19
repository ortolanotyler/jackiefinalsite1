import React from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import FanArt from "./FanArtGallery";
import QuoteBanner from "./QuoteBanner2";
import ContactForm from "./ContactForm";
import BrandCarousel from "../Components/BrandCarousel/BrandCarousel";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#fdebef" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/Home/Header1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      </Box>

      {/* About Section */}
      <Box sx={{ padding: "2rem" }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/Images/About/JackieAboutMe1.JPG`}
              alt="Jackie Wyers"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: "#745B4F", padding: { xs: "1rem", md: "2rem" } }}>
            <Typography
  variant="h4"
  sx={{
    fontFamily: "Playfair Display, serif",
    textAlign: "center",
    marginBottom: "1rem",
  }}
>
  Hello! I'm Jackie Wyers.
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "Playfair Display, serif",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  }}
>
  Welcome to where beauty meets pop culture. I started my YouTube
  career in my teens, and connecting with you through beauty has
  been a highlight of my life.
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "Playfair Display, serif",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  }}
>
  As a professionally trained makeup artist with a deep passion for
  character design, I excel at celebrating and recreating iconic
  looks. My tutorials guide you on how to <strong>switch up your
  style with confidence</strong>.
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "Playfair Display, serif",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  }}
>
  I have a soft spot for TV and films that celebrate sisterhood and
  style. My comfort TV shows include "H2O: Just Add Water" and
  "Emily In Paris." Among my favorite films are "Sisterhood of the
  Traveling Pants," "Mean Girls," "Little Women," and more recently,
  "The Barbie Movie." I love bringing these characters to life
  through makeup transformations, celebrating their impact on me and
  acknowledging the incredible work of the artists behind the
  scenes.
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "Playfair Display, serif",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  }}
>
  Inspiration also strikes from Taylor Swift's ever-changing eras
  and the playful 1960s—a transformative era for women with bold
  makeup trends to match. These inspirations are reflected in my
  video series, which includes TV and film hairstyles, wearable pop
  culture makeup transformations, and Time Travel Tutorials that
  cover all the vintage vibes. You'll also find modern trends and
  product recommendations here!
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "Playfair Display, serif",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  }}
>
  My goal is to simplify beauty techniques that are practical for
  your everyday routine while celebrating our unique interests.
  Whether you're aiming for a Brooke Shields-inspired no-makeup
  makeup look for a beach day, or a vibrant, pink Barbiecore look
  reminiscent of Summer 2023, I'm here to help. I aim to make beauty
  accessible and enjoyable, helping you express yourself
  effortlessly in your everyday life.
</Typography>

<Typography
  variant="body1"
  sx={{
    fontFamily: "Playfair Display, serif",
    fontSize: "1.2rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  }}
>
  Together, we'll create looks that make you feel incredible and pay
  homage to the iconic moments and styles that inspire us. If you
  follow my tutorials, tag me on social media—I love seeing your
  experiments and often reshare them on my channels!
</Typography>
              <Button
                component={Link}
                to="/contact"
                sx={{
                  backgroundColor: "#745B4F",
                  color: "#fff",
                  borderRadius: "20px",
                  padding: "10px 20px",
                  fontFamily: "Playfair Display, serif",
                  "&:hover": { backgroundColor: "#5a3c3c" },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Social Links */}
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#fdedef",
          color: "#745B4F",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "Playfair Display, serif", marginBottom: "1rem" }}
        >
          Let's Connect
        </Typography>
        <Box>
          <YouTubeIcon sx={{ fontSize: 40, margin: "0 10px" }} />
          <InstagramIcon sx={{ fontSize: 40, margin: "0 10px" }} />
          <PinterestIcon sx={{ fontSize: 40, margin: "0 10px" }} />
          <MailOutlineIcon sx={{ fontSize: 40, margin: "0 10px" }} />
        </Box>
      </Box>

      {/* Collaborations */}
      <Box sx={{ padding: "2rem", backgroundColor: "#fff" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/Images/About/AboutJackie.jpg`}
              alt="Collaborations"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>

      {/* Fan Art */}
      <Box sx={{ padding: "0", backgroundColor: "#fdebef" }}>
  
        <FanArt />
      </Box>

      {/* Brand Carousel */}
      <Box sx={{ padding: "2rem", backgroundColor: "#fff" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Playfair Display, serif",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Brands I've Worked With
        </Typography>
        <BrandCarousel />
      </Box>
    </Box>
  );
};

export default About;