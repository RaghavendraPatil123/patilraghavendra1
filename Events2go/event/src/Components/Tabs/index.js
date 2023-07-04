
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Top" value="1" />
            <Tab label="This Weekend" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">
        <Box sx={{ width: '100%',marginLeft:"190px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={6}>
        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hot Brown Honey THE REMIX - May 30 PARTY        
        </Typography>
        <Typography variant="body2" color="text.secondary">
        May 20, 2023
11am to 12pm

 Devla
 Australia
Sydney Opera weekends getting lit more than ever!...


        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid  xs={6}>
        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hyderabads Biggest Weekend THEME PARTY      
        </Typography>
        <Typography variant="body2" color="text.secondary">
        May 16, 2023
11:00 am - 1:00 pm AEST

 Sams Events
 Opera House, Bennelong Point, Sydney NSW 2000, Australia
Sydney Opera weekends getting lit more than ever!...

        </Typography>
      </CardContent>
      
    </Card>
        </Grid >
        <Grid  xs={6} sx={{marginLeft:"340px",marginTop:"20px"}}>
        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hot Brown Honey THE REMIX - May 30     
        </Typography>
        <Typography variant="body2" color="text.secondary">
        May 30, 2023
11:00 am - 1:00 pm AEST

 Sams Events
 Opera House, Bennelong Point, Sydney NSW 2000, Australia
Sydney Opera weekends getting lit more than ever!...


        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
       
      </Grid>
    </Box>
        </TabPanel>
        <TabPanel value="2">
        <Box sx={{ width: '100%',marginLeft:"190px" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={6}>
        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hot Brown Honey THE REMIX - May 30 PARTY        
        </Typography>
        <Typography variant="body2" color="text.secondary">
        May 20, 2023
11am to 12pm

 Devla
 Australia
Sydney Opera weekends getting lit more than ever!...


        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid  xs={6}>
        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hyderabads Biggest Weekend THEME PARTY      
        </Typography>
        <Typography variant="body2" color="text.secondary">
        May 16, 2023
11:00 am - 1:00 pm AEST

 Sams Events
 Opera House, Bennelong Point, Sydney NSW 2000, Australia
Sydney Opera weekends getting lit more than ever!...

        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
        <Grid  xs={6} >
        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Hot Brown Honey THE REMIX - May 30     
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        May 30, 2023
11:00 am - 1:00 pm AEST

 Sams Events
 Opera House, Bennelong Point, Sydney NSW 2000, Australia
Sydney Opera weekends getting lit more than ever!...


        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
       
      </Grid>
    </Box>
        </TabPanel>
        <Typography>
      <Button variant="contained" sx={{backgroundColor:"#f73378",marginBottom:"20px",marginTop:"20px",marginLeft:"630px"}}>Event Schedule</Button>
      </Typography>

      </TabContext>
    </Box>
    
    
    </>
    
  );
}
