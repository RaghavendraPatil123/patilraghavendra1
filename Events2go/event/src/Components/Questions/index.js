import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { CardActions, Grid } from '@mui/material';
import Button from '@mui/material/Button';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Question() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>WHAT IS EVENTS2GO?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Events2go is the brainchild of our team at Techsphere Solutions Pty Ltd, who envisaged that this is the age of technology and we need a new way of working that creates a culture that encourages collaboration and cooperation of units or organisations and maximise the use of technology for achieving greater productivity in the fast paced society, with COVID-19 like lockdown situations where virtual door-knocking has become compulsive and to determine the well-being of remotely working employees that has become essential in performance management and productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>HOW DO I SELL TICKETS?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Login or signup to your free Events2go account, then click Create Event. You can sell tickets for your free and paid events. Attendees can pay through PayPal to buy tickets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>COST OR PRICING?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Events2go App is free to use for individuals/attendees/participants to various events. Government Corporate and Charity organisations who are Event organisers pay a standard fee $150+Gst for free ticketed events, Government and Corporate organisations will pay 5% of + $1.00 per paid ticket and Charities will pay discounted rate of 2.5% + $0.50 per paid ticket. If you are thinking big and ongoing events let’s talk for customised pricing to suit you budget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>CAN I SCAN TICKETS USING THE EVENTS2GO APP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, using the app on your smart device you can check-in and/or scan the QR Code issued on tickets. This means a lesser que times and happy attendees/participants.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>WHAT KIND OF EVENTS CAN BE ACCESSED THROUGH EVENTS2GO APP?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          All kinds of Events, and are NOT excluded to Events, Music festivals, Workshops, Webinars, Conferences, Community Events, Forums and Trainings.
          </Typography>
        </AccordionDetails>
      </Accordion>
     <Typography marginLeft="430px">
      <Typography variant="h6" marginTop="20px">
      Still have a question? 
      <Link href="#" sx={{color:"#e91e63"}}>Ask your question here</Link>
      </Typography>
      <Typography variant="h4" marginTop="20px">
      Keep upto date with events
</Typography>

<Typography variant="h6">
Events 2023 gathered the brightest minds globally. Explore new skills and
</Typography>
<Typography variant="h6">
attributes from our experts and practitioners.
</Typography>
</Typography>
<Typography marginLeft="430px">
  <Grid xs={12} marginTop="10px" marginBottom="10px">
<TextField id="infoevents2go@gmail.com" label="infoevents2go@gmail.com" variant="outlined" />
<Button variant="contained" sx={{marginTop:"8px",backgroundColor:"#f50057", marginLeft:"20px"}}>Get Started</Button>
<Typography marginTop="10px" marginBottom="10px">
Check out our Privacy Policy     Terms Of Use  for more information

</Typography>


</Grid>
</Typography>
    </div>
  );
}