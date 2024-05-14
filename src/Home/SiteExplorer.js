import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const cardDetails = [
  {
    title: 'POP CULTURE',
    backgroundImage: `${process.env.PUBLIC_URL}/Images/Home/JackieWyersBarbie.jpg`,
    path: '/popculture'
  },
  {
    title: 'VINTAGE VIBES',
    backgroundImage: `${process.env.PUBLIC_URL}/Images/Home/GraceKellyJackieWyers.jpg`,
    path: '/timetraveltutorials'
  },
  {
    title: ' TRENDS ',
    backgroundImage: `${process.env.PUBLIC_URL}/Images/Home/JackieWyersPatMcGrath.jpeg`,
    path: '/trends'
  },
];

export default function SiteExplorer() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const navigate = useNavigate();

  return (
    <Grid container spacing={1} justifyContent="center" sx={{ p: 5 }}>
      {cardDetails.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ p: 1 }}>
          <Card
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            sx={{
              height: { xs: 250, md: 550 }, // Adjust height based on screen size
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: '0.9s',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                opacity: hoverIndex === index ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out',
                gap: '1rem',
                padding: '.5rem',
              }}
            >
              <Typography variant="h5" component="h2" sx={{ 
                fontFamily: "'Arapey', serif", 
                color: 'white', 
                zIndex: 2,
                fontSize: '1.75rem',
                padding: '0.1em 0.4em',
              }}>
                {card.title}
              </Typography>
              <Typography sx={{ 
                fontFamily: "'GFS Didot', serif", 
                color: 'white', 
                zIndex: 2,
                fontSize: '1rem',
              }}>
                {card.description}
              </Typography>
              <Button 
                size="small" 
                sx={{ 
                  fontFamily: "'Arapey', sans-serif",
                  color: 'white', 
                  zIndex: 2,
                  fontSize: '1rem',
                  border: '2px solid white',

                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                    borderColor: 'white'
                  }
                }}
                onClick={() => navigate(card.path)}
              >
                READ HERE
              </Button>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
