import { Grid, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function Footer(){
    
    return(
        <>
        <Typography sx={{marginLeft:"150px"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="230px" >
  <Grid xs={3}>
  <Typography variant="h6">
            Find events
          </Typography>
          <Typography variant="subtitle1" >
            Search events
          </Typography>
          
  </Grid>
  <Grid xs={3}>
  <Typography variant="h6">
  Host events
          </Typography>
          <Typography variant="subtitle1" >
          All features
          </Typography>
          <Typography variant="subtitle1" >
          Pricing
          </Typography>
          <Typography variant="subtitle1" >
          FAQs
          </Typography>
  </Grid>
  <Grid xs={3}>
  <Typography variant="h6">
  Get in touch
          </Typography>
          <Typography variant="subtitle1" >
          Help
          </Typography>
          <Typography variant="subtitle1" >
          Contact us
          </Typography>
  </Grid>
  <Grid xs={3}>
  <Typography variant="h6">
            Follow us on
          </Typography>
          <IconButton >
          <Avatar sx={{ bgcolor: "#651fff" }}>f</Avatar>
                <Avatar sx={{ bgcolor: "#651fff"}}>in</Avatar>
              </IconButton>
          
  </Grid>
</Grid>
</Typography>
<Typography variant="h8" sx={{marginLeft:"120px",marginTop:"150px"}}  >
© Copyright Events2go. All Rights Reserved
          </Typography>
          
        </>
    )
}