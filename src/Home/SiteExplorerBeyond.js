import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const cardDetails = [
  {
    title: 'TRAVEL REVIEWS',
    backgroundImage: `${process.env.PUBLIC_URL}/Images/Home/MAUITHUMBNAIL.jpg`,
    path: '/travel'
  },
  {
    title: 'ITINERARIES',
    backgroundImage: `${process.env.PUBLIC_URL}/Images/Home/EPCOTTHUMBNAIL.jpeg`,
    path: '/travel'
  },
  {
    title: 'DIARY',
    backgroundImage: `${process.env.PUBLIC_URL}/Images/Home/DIARY.jpg`,
    path: '/diary'
  },
];

export default function SiteExplorerBeyond() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 5 }}>
      {cardDetails.map((card, index) => (
        <Grid item xs={11} sm={6} md={4} key={index} sx={{ p: 1, display: 'flex' }}>
          <Card
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            sx={{
              height: 750,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: '0.9s',
              flexGrow: 1,
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
                gap: '0.1rem',
                padding: '5rem',
              }}
            >
              <Typography variant="h5" component="h2" sx={{ fontFamily: "'Arapey', serif", color: 'white', zIndex: 2, fontSize: '1.75rem', padding: '0.1em 0.4em' }}>
                {card.title}
              </Typography>
              <Typography sx={{ fontFamily: "'GFS Didot', serif", color: 'white', zIndex: 2, fontSize: '1rem' }}>
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
                    borderColor: 'white',
                  },
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
