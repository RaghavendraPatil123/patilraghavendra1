import { Typography } from "@mui/material";
import CardComponent from "../../Components/CardComponent";

import Grid from '@mui/material/Grid';

export default function Events(){
  
  const heroStyle = {
    minHeight: '40vh',
  
    marginTop: '0px',
    backgroundImage: 'url(https://set.jainuniversity.ac.in/uploads/blog/e7c3c0d495bb5a6397e18f827cbb36f4.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    

};

const heroTextStyle = {

    textAlign: 'left',
    textShadow: '1px 1px 2px #000'
};

    return(
        <>
 <Grid container style={heroStyle}>
                    <Grid item xs={12}>
                        <div style={heroTextStyle}>
                            <Typography variant="h4"
                                sx={{ color: "white", marginLeft:"150px",marginTop:"60px"}}
                            >All Events
                            </Typography>
                            </div>
    </Grid>
    </Grid>
        <Grid marginLeft="130px">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px">
        <Grid  xs={4} >
        <CardComponent
        image="https://www.events2go.com.au/uploads/upcomingevents/_upcoming_1687523033.jpg"
         heading="Businesses Now & Future"
         date="August 14, 2023"
         time=" 9am to 5pm"
         location="Bowman Hall, 35 Flushcombe Rd, Blacktown NSW 2148"
         />
        </Grid>
        <Grid xs={4} marginTop="30px" >
         <CardComponent
         image="https://www.events2go.com.au/uploads/upcomingevents/_upcoming_1687509156.png"
         heading="Biggest Morning Tea"
         date="June 24, 2023,"
         time="10am to 5pm"
         location="Sydney, Australia"
          
          />
        </Grid>
        <Grid xs={4}>
          <CardComponent
           image="https://www.events2go.com.au/uploads/upcomingevents/_upcoming_1687064128.png"
           heading="Multicultural Food Festival"
           date="June 19, 2023,"
           time="10am to 5pm"
           location="Australia"
          />
        </Grid>
        </Grid>
        </Grid>
        </>
    )
}