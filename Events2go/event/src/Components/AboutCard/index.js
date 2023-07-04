import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AboutCard (props) {
    const title=props.title;
    const description=props.description;
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color='#002884' sx={{fontFamily: "raleway"}} fontSize='1.5rem'>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}