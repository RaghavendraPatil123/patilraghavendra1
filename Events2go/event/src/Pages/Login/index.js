import { Grid,Typography ,Button} from "@mui/material"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
export default function Login (){
    return(
        <>
         <Card variant="outlined" marginTop="140px" sx={{backgroundColor:"#eeeeee"}}>
    <CardContent>
   
   
    <Grid container rowSpacing={1}  marginTop="100px">
        <Grid xs={12} marginRight="100px">
        <Button variant="contained"  color="success" sx={{backgroundColor:"pink",marginRight:"20px"}} >
            Individual Login
            </Button>
            
            <Button variant="contained"  color="success" sx={{backgroundColor:"pink"}} >
            organisation Login
            </Button>
        </Grid>
        <Grid xs={1.5}></Grid>
 <Grid xs={8} marginTop="30px">
 <TextField fullWidth label="User Name(email)" id="fullWidth" />
 <TextField fullWidth label=" Password" id="fullWidth"  sx={{marginTop:"20px"}}/>
 <Button variant="contained"  color="success" sx={{backgroundColor:"pink",marginTop:"20px"}} >
          LOGIN
        </Button>
        <br/>
        <Link href="#" color="inherit" >
  {'Forget Password'}
      </Link>
 </Grid>
 </Grid>

    </CardContent>
    </Card>
        </>
    )
}
