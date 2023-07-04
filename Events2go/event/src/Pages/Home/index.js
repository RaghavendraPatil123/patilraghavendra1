import CardComponent from "../../Components/CardComponent";
import BasicCard from "../../Components/BasicCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import OccasionBasicCard from "../../Components/Function";
import Card from "../../Components/Card";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import group from "../../Assests/group.jpg";
import Tabs from "../../Components/Tabs";
import Question from "../../Components/Questions";
import { NavLink } from "react-router-dom";

export default function Home(){
  const heroStyle = {
    minHeight: '100vh',
   
    marginTop: '0px',
    backgroundImage: 'url(https://www.events2go.com.au/assets/front/images/slider2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

};

const heroTextStyle = {

    textAlign: 'center',
    textShadow: '1px 1px 2px #000'
};

const actionButtonStyle = {
    margin: '16px',
};
    return(
        <>
          <Grid container style={heroStyle}>
                    <Grid item xs={12} marginLeft="110px">
                        <div style={heroTextStyle}>
                            <Typography variant="h4"
                                sx={{ color: "white", fontFamily: "raleway", marginBottom: "1px" }}
                            >Go Kangaroos your appetite starts here!
                            </Typography>
                            <Typography variant="h4"
                                sx={{ color: "white", fontFamily: "raleway", marginBottom: "1px" }}
                            >All your Events schedule in Events2go
                            </Typography>
                            <Typography variant="h3"
                                sx={{ color: "white", marginBottom: "5px"}} fontSize='4.5 rem'
                            >Event Manager App
                            </Typography>
                         

                           
                            <NavLink to="/Events">
                                <Button variant="contained" color="secondary" style={actionButtonStyle}>

                                    Events Schedule

                                </Button>
                                <Button variant="contained" color="secondary" style={actionButtonStyle}>

                            Book Ticket Now
                              </Button>
                            </NavLink>
                        </div>

                    </Grid>
                </Grid>
          <Box sx={{ width: '100%' }}>
            <Grid marginLeft="130px">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 5 }} >
        <Grid  xs={4} marginTop="30px">
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
        <Grid  xs={4} marginTop="30px" >
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


      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        <Grid xs={6} marginTop="30px">
          <img src="https://events2go.com.au/assets/front/images/image-02.png"/>
        </Grid>
        
        <Grid xs={6} sx={{marginTop:"150px"}}>
        <Typography color="orangered" >
    ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
    </Typography>
    <Typography>
Welcome to Events2go Event Manager
</Typography>
<Typography>
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
    </Typography>

    <Typography marginTop="30px" marginLeft="250px">
    <Button variant="contained" sx={{backgroundColor:"#f73378"}}Event Schedule> 
     Event Schedule
    </Button>
    </Typography>
        </Grid>
        <Grid xs={6}>
        <Typography variant="h2" color="black">
            Creative, Engaged, Well-connected, Self-promoting and Reporting Event Organiser! 
            </Typography>
        </Grid>
        <Grid xs={6}>
          <img src="https://as2.ftcdn.net/v2/jpg/06/05/12/53/1000_F_605125374_eifLi7uPJeKdxoAH96xOUXV1CSCxUMsQ.jpg"/>
        </Grid>
      </Grid>
    </Box>
      </Box>
      <Typography variant="h4" marginLeft="550px" marginTop="20px" marginBottom="10px">
           Trending Events
            </Typography>
            <Typography variant="h6" marginLeft="350px">
            Below you'll find the schedule for Events 2023. We'll keep this page regularly
            </Typography>
            <Typography variant="h6" marginLeft="350px">
             updated with all new events and sessions, so be sure to keep checking in!
             </Typography>

             <Tabs/>
             <Typography >
        <Typography variant="h4" marginTop="10px" marginLeft="400px">
      Our mission is to bring people together!
      
      </Typography>
      <Typography sx={{marginTop:"10px",marginBottom:"10px"}}>
      <Button variant="contained" sx={{backgroundColor:"#f73378",marginLeft:"650px"}}>JOIN US</Button>
      </Typography>
      <Typography>
      <Typography variant="h4" marginLeft="500px">
      Events for every occasion

      </Typography>
      <Typography sx={{marginLeft:"430px"}}>
      Diversity is our strength, we would like to bring people from all walks of life to 
      <Typography sx={{marginLeft:"250px"}}>
      work together
      </Typography>
      </Typography>
      </Typography>
      </Typography>
      <Typography marginTop="20px">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={3}>
      <OccasionBasicCard 
      head = "Free Events"
      des1 ="Standard Fee"
      des2 = "Applicable"
      />
      </Grid>
      <Grid xs={3}>
      <OccasionBasicCard
      head = "Standard"
      des1 ="5% + $1.00"
      des2 = "Per Paid Ticket"
      />
      </Grid>
      <Grid xs={3}>
      <OccasionBasicCard
      head = "Charities"
      des1 ="2.5% + $0.50"
      des2 = "Per paid ticket"
      />
      </Grid>
      <Grid xs={3}>
      <OccasionBasicCard
      head = "Custom"
      des1 ="Thinking big? Let's talk."

      button = "Contact Us"
      />
      </Grid>
      </Grid>
      </Typography>
      <Typography>
     <Typography marginTop="20px">
      All plans include access to all features.Technology,Pricing,Customer Service and Support will be provided.
     </Typography>
     <Typography variant="h5"  marginTop="10px">
     Quality Service and Customer first.
     </Typography>
     </Typography>
     <Typography variant="h4"  marginTop="10px">
    Our Reviews Latest News & Articles
    </Typography>
    <Typography marginTop="10px">
Events 2023 gathered the brightest minds globally. Explore new skills and
<Typography>
 attributes from our experts and practitioners.
 </Typography>
</Typography>
     <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      <Grid xs={2} ></Grid>
      <Grid xs={3} >
      <BasicCard
       head="Posted on May 22, 2023"
       title="Latest News"
       image="http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg"
       para="It has survived not only five..."
       more="More details"
      
      />
      </Grid>
      <Grid xs={3}>
      <BasicCard
       head="Posted on May 18, 2023"
       title="Articles"
       image="http://events2go.com.au/uploads/blog/post/devim_2057839072.jpg"
       para="Reference site about Lorem..."
       more="More details"
      
      />
      </Grid>
      <Grid xs={3}>
      <BasicCard
       head="Posted on May 18, 2023"
       title="Reviews"
       image="http://events2go.com.au/uploads/blog/post/devim_854574434.jpg"
       para="Lorem ipsum is..."
       more="More details"
      
      />
      </Grid>
      </Grid>
      <Typography variant="h4" marginTop="10px">
     Have Questions? Look Here.
     </Typography>
     <Typography marginTop="10px">
     Events 2023 gathered the brightest minds in the tech world. Learn new skills and
     </Typography>
     <Typography marginBottom="10px">
     get insights from experts and practitioners from all around!
     </Typography>
     <Question/>
        </>
       
    )
}