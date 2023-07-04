import { Grid,Typography ,Button} from "@mui/material"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

  
  
export default function Signup ( fixed){
    const navigate = useNavigate();
    const onRegistration = (e) => {
        e.preventDefault();
        navigate('/Registration')
    };
    return(
        <>
        
         <Card variant="outlined" marginTop="140px" sx={{backgroundColor:"#eeeeee"}}>
    <CardContent>
   
   
    <Grid container rowSpacing={1}  marginTop="100px">
        <Grid xs={12} marginRight="100px">
            
        <Button variant="contained"  color="success" sx={{backgroundColor:"magenta",marginRight:"20px"}} >
            Individual Registration
            </Button>
            
            <Button variant="contained"   onClick={onRegistration} color="success" sx={{backgroundColor:"magenta"}} >
            organisation Registration
            </Button>
        </Grid>
        <Grid xs={1.5}></Grid>
 <Grid xs={8} marginTop="30px">
 
 <TextField fullWidth label=" First Name" id="fullWidth" sx={{marginTop:"30px"}}  />

 <TextField fullWidth label="Last Name" id="fullWidth" sx={{marginTop:"10px"}} />

 <TextField fullWidth label=" Mobile" id="fullWidth" sx={{marginTop:"10px"}} />

 <TextField fullWidth label=" email(User Name)" id="fullWidth"  sx={{marginTop:"10px"}}/>

 <TextField fullWidth label=" Password" id="fullWidth" sx={{marginTop:"10px"}} />

 <Button variant="contained"  color="success" sx={{backgroundColor:"magenta", marginTop:"30px"}} >
          SIGNUP
        </Button>
        
     
 </Grid>
 </Grid>

    </CardContent>
    </Card>
        </>
    )
}