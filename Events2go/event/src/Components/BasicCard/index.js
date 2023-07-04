import {  Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
export default function BasicCard(props){
    const head=props.head;
    const title=props.title;
    const image=props.image;
    const para=props.para;
    const more=props.more;

 return(
    <>
<CardActions>
<Card sx={{ maxWidth: 345 }} color='#002884'>
     
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {props.head}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.title}
      />
      <Typography variant="body2" color="text.secondary">
          {props.para}
        </Typography>
      <CardActions>
      <Button variant="outlined">{props.more}</Button>
      </CardActions>
    </Card>

</CardActions>
    </>
 )
}