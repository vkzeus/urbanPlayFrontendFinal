import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ img, id }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100px', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={id}
        height="150"  
        image={img}
      />
      <CardContent sx={{ flexGrow: 1, paddingBottom: '8px' }}>  
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: '0px' }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
