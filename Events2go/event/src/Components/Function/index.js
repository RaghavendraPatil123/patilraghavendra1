import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function OccasionBasicCard(props) {
  const head = props.head;
  const des1 = props.des1;
  const des2 = props.des2;
  const button = props.button
  return (
    <Card sx={{ minWidth: 275, minHeight: 165 }}>
      <CardContent>

        <Typography gutterBottom variant="h5" component="div" sx={{backgroundColor:"#2a3eb1"}}>
          {head}
        </Typography>
        <Typography sx={{ }} color="text.secondary" >
          {des1}
        </Typography>
        <Typography variant="body2">
          {des2}
        </Typography>
       
      </CardContent>
      <CardActions>

        <Button sx={{marginLeft:"35%"}}>{button}</Button>

      </CardActions>
    </Card>
  );
}
