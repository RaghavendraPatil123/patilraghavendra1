import { Grid,Typography ,Button} from "@mui/material"
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Contact(){
 
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
                                >Contact Us
                                </Typography>
                                </div>
        </Grid>
        </Grid>
 
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} marginTop="80px" marginBottom="50px" marginLeft="500px">
 <Grid xs={1} ></Grid>
 <Grid xs={3} marginLeft="120px" >
    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRianVLuQXtRCw0BpJ0INQpcwdtz313aiv1wjcbD-wAvHoxWqrb" width="100" height="100"/>
    <Typography variant="h6" color='#002884'>
    Our Location 
    </Typography>
    <Typography variant="subtitle1" >
    48 Cameron St,
    </Typography>
    <Typography variant="subtitle1">
    Doonside NSW 2767
    </Typography>

    </Grid>
    <Grid xs={0.5} ></Grid>
    <Grid xs={3} >
    <img src="https://www.gitanjalicollegegroup.org/assets/frontend/gitanjali-theme/images/icon_transfer.svg" width="100" height="100"/>
    <Typography variant="h6" color='#002884'>
    Drop A Line 
    </Typography>
    <Link href="#" color="inherit">
  {'infoevents2go@gmail.com'}
</Link>
<Typography>
<Link href="#" color="inherit">
  {'infotechspheresolutions@gmail.com'}
</Link>
</Typography>
    </Grid>
    <Grid xs={0.5}></Grid>
    <Grid xs={3} >
    <img  src="https://www.telitec.com/wp-content/uploads/2014/11/smartphone-pink.png" width="100" height="100"/>
    <Typography variant="h6" color='#002884'>
    Let's Talk
    </Typography>
    <Typography variant="subtitle1" >
    Tel: +61 431 622 292
    </Typography>
    <Typography variant="subtitle1">
    Tel: +61 422 202 766
    </Typography>

    </Grid>
    </Grid>
    <Card variant="outlined" marginTop="40px" sx={{backgroundColor:"#eeeeee"}}>
    <CardContent>
    <Typography variant="h5" textAlign="left" marginLeft="160px" color='#002884'>
    Send A Message
    </Typography>
    <Typography variant="subtitle1" textAlign="left" marginLeft="160px" >
    Please don't hesitate to get in touch with us anytime
    </Typography>
   
    <Grid container rowSpacing={1} >
        <Grid xs={1.5}></Grid>
 <Grid xs={8} marginTop="30px">
 <TextField fullWidth label="Enter Your Name*" id="fullWidth" />
 <Typography marginTop="20px">
 <TextField fullWidth label="Enter Your Email*" id="fullWidth" marginTop="30px" />
 </Typography>
 <Typography marginTop="20px" marginBottom="50px">
 <TextField fullWidth label="Your Message " id="fullWidth" />
 </Typography>
 <Button variant="contained"  color="success" sx={{backgroundColor:"pink"}} >
          Send Your Message
        </Button>
 </Grid>
 </Grid>

    </CardContent>
    </Card>
        </>
    )
}
