import { Grid, Typography } from "@mui/material";
import AboutCard from "../../Components/AboutCard";

import Box from '@mui/material/Box';
export default function About(){
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
                            >About Us
                            </Typography>
                            </div>
    </Grid>
    </Grid>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6} marginTop="20px">
          <img src="http://events2go.com.au/assets/front/images/image-06.png"/>
        </Grid>
        <Grid xs={6} marginTop="230px">
            <Typography variant='h5' color="#f50057">
        ABOUT THE EVENTS2GO [ EVENTS MANAGER ]
        </Typography>
Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
        </Grid>
        <Grid xs={6}>
            <Typography variant='h4' color='#002884' marginLeft="50px">
        Why Events2go is essential for Corporates, Governments and Not-for-profit sectors?
        </Typography>
        <Typography alignText='50px' marginLeft="50px">
. Remotely working Employee well-being has become crucial in terms of productivity and hence online engagement is the only game changer to identify employee well-being and performance management support.
</Typography>
<Typography marginLeft="50px">
. Not-for-profits often find it difficult to organise webinars, online charity and fundraising events due to limited IT resources and financial requirements.
</Typography>
<Typography marginLeft="50px">
. Organising events more efficiently and effectively through monitoring mechanism that registers the RSVPs, feedback and issuing ticketing
</Typography>
        </Grid>
        <Grid xs={6} >
          <img src="https://as1.ftcdn.net/v2/jpg/04/55/89/96/1000_F_455899689_AeOMCKWiST6cAN2VxkLQ7bvUSCynamgI.jpg" height="350px"/>
        </Grid>
       
      </Grid>
    </Box>
    <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }} marginTop="20px" >
      <Grid xs={3}></Grid>
 
</Grid>
       <Typography marginLeft="500px">
            <Typography marginTop="25px"  fontSize='2.5rem' color='#002884'>
                Key Features
            </Typography>
            </Typography>

            
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="30px" >
        <Grid item xs={6} >
          <AboutCard
          title="Easy Event creation for the purposes of Registration & Check-in" 
          description="• Helps in developing custom registration forms
          • Secure important attendee information
          • Generates QR codes for quick scanning and onsite check-ins
          • Assist people with the option to self-check in within the app
          • Easily track attendance rates in real-time"
          />
        </Grid>
        <Grid  xs={6}>
          <AboutCard
         title="Engagement"
         description="• Accessible Live streaming or virtual presentations through Events2go App
         • Businesses can gain more visibility through Events2go in-App exhibit booths
         • Publish multimedia content for easy download
         • Set up live polls, Q&A sessions and leader-boards for attendees
         • Display job boards and product listings"
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <AboutCard
          title="Networking & Lead Capture"
          description="• Seamless contact exchange between attendees through QR scanning
          • Allow attendees to search for users, ‘favourite’ their contacts, and export contact lists
          • Connect attendees through Events2go in-App chat & meeting booking tools
          • Helps attendees find exhibitors through an interactive floor map
          • Host a live feed of the goings-on in your event or seek feedback instantly"
          />
        </Grid>
        <Grid  xs={6}>
          <AboutCard
         title="Promotion, Branding and Sponsorship"
         description="• Create white-labelled apps featuring your custom branding
         • Sell spaces within your app’s virtual exhibit hall
         • Offer full-page splash ads to increase sponsor visibility
         • Set up rolling banner ads throughout the mobile app
         • Set up a sponsor’s page to increase logo visibility"
          />
        </Grid>
      </Grid>
    
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <AboutCard
          title="Reporting and Analytics"
          description="• Track attendance rates, session check-ins and booth traffic within the app
          • Evaluate individual attendee engagement through attendee journey tracking
          • Measure satisfaction through surveys about the event in general and individual sessions
          • Export your data to further evaluate and share with event partners"
          />
        </Grid>
        </Grid>
        </>
    )
}