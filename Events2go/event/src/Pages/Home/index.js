import CardComponent from "../../Components/CardComponent";
import CardComponent1 from "../../Components/CardComponent1";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardComponent2 from "../../Components/CardComponents2";
import Card from "../../Components/Card";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import group from "../../Assests/group.jpg";
export default function Home(){
    return(
        <>
          <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 5 }} >
        <Grid  xs={4}>
         <CardComponent/>
        </Grid>
        <Grid xs={4}>
         <CardComponent1/>
        </Grid>
        <Grid  xs={4}>
          <CardComponent2/>
        </Grid>
       
      </Grid>
   

    <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
<Grid xs={6}>
   <Card/>
</Grid>
<Grid xs={6}>
    <Typography color="orangered">
    ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
    </Typography>
    <Typography>
Welcome to Events2go Event Manager
</Typography>
<Typography>
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
    
    </Typography>
    <Typography color="orangered">


    <Button variant="contained" Event Schedule> 
     Event Schedule
    </Button>
    </Typography>
</Grid>

</Grid>
<Box sx={{ width: '50' }}>
      <Grid container rowSpacing={1}  columnSpacing={{ xs: 1, sm: 1, md: 1 }} >
        <Grid xs={6}>
            <Typography  color="black">
            Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser! backgroundColor:
            </Typography>
        </Grid>
        <Grid xs={6}>
            <img src={group}></img>
            </Grid>
      </Grid>
      </Box>
      </Box>
      <Typography>
           Trending Events
            </Typography>
            <Typography>
            Below you'll find the schedule for Events 2023. We'll keep this page regularly
             updated with all new events and sessions, so be sure to keep checking in!
            </Typography>
        </>
       
    )
}