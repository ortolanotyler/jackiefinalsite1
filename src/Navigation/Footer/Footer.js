import React, { useState, useEffect } from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SwitchUpYour from "./SwitchUpYour";
import SmallAdSenseAd from "../../Home/AdsenseSmall";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Box sx={{ width: "100%", overflowX: "hidden", backgroundColor: "#ffffff" }}>
      <SwitchUpYour />

      <Box
        component="footer"
        sx={{
          width: "100%",
          fontFamily: "GFS Didot, serif",
          justifyContent: "center",
          backgroundColor: "#EBE8E4",
          color: "#745B4F",
          textAlign: "center",
          padding: "2rem",
        
        }}
      >
        {/* Quick Links */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Responsive layout
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "0.5rem", md: "2rem" }, // Adjust gap based on screen size
            mb: 2,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              fontSize: "18px",
              fontFamily: "GFS Didot, serif",
              color: "#745B4F",
              "&:hover": { textDecoration: "underline", color: "#2b3d2b" },
            }}
          >
            Home
          </Link>
          <Link
            href="/sitemap"
            underline="none"
            sx={{
              fontSize: "18px",
              fontFamily: "GFS Didot, serif",
              color: "#745B4F",
              "&:hover": { textDecoration: "underline", color: "#2b3d2b" },
            }}
          >
            Sitemap
          </Link>
          <Link
            href="/press"
            underline="none"
            sx={{
              fontSize: "18px",
              fontFamily: "GFS Didot, serif",
              color: "#745B4F",
              "&:hover": { textDecoration: "underline", color: "#2b3d2b" },
            }}
          >
            Media Kit
          </Link>
          <Link
            href="/subscribe"
            underline="none"
            sx={{
              fontSize: "18px",
              fontFamily: "GFS Didot, serif",
              color: "#745B4F",
              "&:hover": { textDecoration: "underline", color: "#2b3d2b" },
            }}
          >
            Subscribe
          </Link>
          <Link
            href="/privacy"
            underline="none"
            sx={{
              fontSize: "18px",
              fontFamily: "GFS Didot, serif",
              color: "#745B4F",
              "&:hover": { textDecoration: "underline", color: "#2b3d2b" },
            }}
          >
            Policies
          </Link>
        </Box>

        {/* Footer Bottom Section */}
        <Typography
          sx={{
            fontFamily: "GFS Didot, serif",
            fontSize: "14px",
            color: "#745B4F",
            mt: 1,
            mb: 1,
          }}
        >
          © Jackie Wyers 2024
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <IconButton
            component="a"
            href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#745B4F", fontSize: 30 }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#745B4F", fontSize: 30 }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://pin.it/27OmCVDye"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#745B4F", fontSize: 30 }}
          >
            <PinterestIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:jackietwyers@gmail.com"
            sx={{ color: "#745B4F", fontSize: 30 }}
          >
            <MailOutlineIcon />
          </IconButton>
        </Box>

        {/* Back to Top Button */}
        {showButton && (
          <Box
            sx={{
              position: "fixed",
              bottom: "1rem",
              right: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
              padding: "1rem",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#FFD700",
                color: "#2b3d2b",
              },
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onClick={handleScrollToTop}
          >
            <IconButton
              sx={{
                color: "#fcfaf4",
                "&:hover": {
                  color: "#2b3d2b",
                  background: "none",
                },
              }}
            >
              <ArrowUpwardIcon />
            </IconButton>
            <Typography
              sx={{
                color: "#fcfaf4",
                fontFamily: "Quicksand, sans-serif",
                marginTop: "1px",
                "&:hover": {
                  color: "#2b3d2b",
                },
              }}
            >
              Top
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
    <DividerWithText text = "Ad"/>

<div className="ad-container">
 <SmallAdSenseAd />
  <SmallAdSenseAd />
</div>
<DividerWithText text = "Ad"/>

     </>
  );
};

export default Footer;