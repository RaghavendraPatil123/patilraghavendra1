

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function BlogCard(props){
    const head=props.head
    const title=props.title
    const image=props.image
    const para=props.para
    const more=props.more
    return(
        <>
        <Grid xs={2} sx={{marginTop:"50px",marginLeft:"150px"}}>
        <Card sx={{ maxWidth: 800 }}>
      
      <CardContent>
        <Typography marginRight="550px"  >
        {props.head}
        </Typography>
        <Typography variant="h5" component="div" color='#002884'>
        {props.title}
        </Typography>
        <Typography marginTop="10px">
        <CardMedia
        sx={{ height: 300 }}
        image={props.image}
      />
      </Typography>
      </CardContent>
      <Typography >
        {props.para}
        </Typography>
        <Typography marginLeft="20px" marginBottom="20px" marginTop="20px">
      <CardActions>
      <Button variant="outlined">{props.more}</Button>
      </CardActions>
      </Typography>
    </Card>
        </Grid>
        </>
    )
}
