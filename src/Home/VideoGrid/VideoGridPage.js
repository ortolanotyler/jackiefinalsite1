import React from 'react';
import { Grid, Box, Button, Container, Typography } from '@mui/material';
import TextReveal from '../../Components/TextReveal';
import AdSenseAd from '../../Advertising/Ads';

const VideoGrid = ({ videos }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4, padding: '1rem', borderRadius: '8px' }}>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="center" p={2} sx={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h6" sx={{ fontFamily: 'GFS Didot, serif', color: 'black', mb: 2 }}>
                  {video.title}
                </Typography>
                <Box sx={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginBottom: '1rem' }}>
                  <iframe
                    src={video.src}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  href={video.route}
                  sx={{
                    mt: 2,
                    backgroundColor: '#745B4F',
                    color: 'white',
                    fontFamily: 'GFS Didot, serif',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: '#5a463c',
                      boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                >
                  READ HERE
                </Button>
              </Box>
            </Grid>
            {(index + 1) % 4 === 0 && (
              <Grid item xs={12}>
                <Box p={2} sx={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', mt: 3 }}>
                  <AdSenseAd />
                </Box>
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

const videos = [
  {
    src: "https://www.youtube.com/embed/Uz03ReLZO9k?si=zWnzPrrt4i10KSxF&controls=0",
    route: "/VictoriaSecret",
    title: "Victoria's Secret 2014",
  },
  {
    src: "https://www.youtube.com/embed/eLreMotKEs?si=d0tn8Jgb1chN0M7K&controls=0",
    route: "/NewZealand",
    title: "Aukland, New Zealand Vlog",
  },
  {
    src: "https://www.youtube.com/embed/JfaND9n9ZCU?si=9TIoFI26SS-0MNEL&controls=0",
    route: "/margotbarbie",
    title: "Barbie Movie Transformation ",
  },
  {
    src: "https://www.youtube.com/embed/4lDCreVFqAw?si=WGtHQk3zvPwgEIGg&controls=0",
    route: "/tremblant",
    title: "Mont Tremblant - Experience",
  },
  {
    src: "https://www.youtube.com/embed/EP-PeJSrmf4?si=bClXjPphKQvb2xTX&controls=0",
    route: "/summerinspo",
    title: "Summer Mermaid Inspo",
  },
  {
    src: "https://www.youtube.com/embed/qIAMUI6Enz0?si=1A1DlK3mnHMKuEzM&controls=0",
    route: "/princeofwales",
    title: "Prince of Wales - Niagara on the Lake",
  },
  {
    src: "https://www.youtube.com/embed/HtEPH6RUEZg?si=3ZogJFe4CI4N47Bv&controls=0",
    route: "/2016makeup",
    title: "2016 Makeup Trend Report",
  },
  {
    src: "https://www.youtube.com/embed/hIGr8Gj4kQA?si=ix6en5k_OI8Yfnl3&controls=0",
    route: "/animalpretty",
    title: "Which Animal Pretty are You?",
  },
  {
    src: "https://www.youtube.com/embed/HKvFRr4TINw?si=lzijNWa-xTQg5T9K&controls=0",
    route: "/westgatesandiego",
    title: "San Diego Vlog - Westgate Hotel Review",
  },
  {
    src: "https://www.youtube.com/embed/Jm0BdU88kr4?si=rwOP344a5iggRhFA&controls=0",
    route: "/lattemakeup",
    title: "Latte Makeup Trend Report",
  },
  {
    src: "https://www.youtube.com/embed/IIjMH5bnq8k?si=0lmEUzxvqxklqQGt&controls=0",
    route: "/nomakeupspring",
    title: "No-Makeup Makeup for Spring",
  },
  {
    src: "https://www.youtube.com/embed/ec7hauzrWWk?si=CBstnk9Qg_GA_zsU&controls=0",
    route: "/andazmaui",
    title: "Hawaii Vlog - Andaz Maui Review",
  },
  {
    src: "https://www.youtube.com/embed/Vy6e7k5uur8?si=VD4AKjlFGG2a2zWA&controls=0",
    route: "/sugarplumfairy",
    title: "Sugar Plum Fairy : Trend Report",
  },
  {
    src: "https://www.youtube.com/embed/7HoL0rVmZHI?si=B_MIAH9V9p6JdfDH&controls=0",
    route: "/balkeblog",
    title: "Iconic '60s Makeup",
  },
  {
    src: "https://www.youtube.com/embed/t1jJtpsxes4?si=yl1r_b5PO2WIFfqp&controls=0",
    route: "/iconicsharon",
    title: "Sharon Tate's Bohemian Glam",
  },
  {
    src: "https://www.youtube.com/embed/y0vHs6pRC3Y?si=-k-v_z_svdlmbVabF&controls=0",
    route: "/sharontatebridal",
    title: "'60s Bridal Makeup",
  },
  {
    src: "https://www.youtube.com/embed/o8_dfwGNXAc?si=wfl-Ifco4LYCE3wX&controls=0",
    route: "/sophialoren",
    title: "Sophia Loren : Time Travel Tutorials",
  },
  {
    src: "https://www.youtube.com/embed/OrlZinEp4AI?si=SdYhsCHSFYaML5bV&controls=0",
    route: "/yardley1965",
    title: "Yardley 1965: Recreating the Iconic Ad",
  },
  {
    src: "https://www.youtube.com/embed/1WPhwXOdSSw?si=g9tKrR3NT4ybB5vL&controls=0",
    route: "/twiggy",
    title: "Twiggy MOD",
  },
  // Add more videos as needed
];

const VideoGridPage = () => (
  <div style={{ backgroundColor: '#fdedef', padding: '2rem' }}>
    <TextReveal text="VIDEOS" style={{ color: 'black', height: '12vh' }} />
    <VideoGrid videos={videos} />
  </div>
);

export default VideoGridPage;
