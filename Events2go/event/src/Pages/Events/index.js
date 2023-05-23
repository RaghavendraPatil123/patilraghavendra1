import { Typography } from "@mui/material";
import CardComponent from "../../Components/CardComponent";
import CardComponent1 from "../../Components/CardComponent1";
import CardComponent2 from "../../Components/CardComponents2";
import Grid from '@mui/material/Grid';

export default function Events(){
    return(
        <>
        <Typography >
           All Events
        </Typography >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid  xs={4}>
          <CardComponent/>
        </Grid>
        <Grid  xs={4}>
          <CardComponent1/>
        </Grid>
        <Grid xs={4}>
          <CardComponent2/>
        </Grid>
        </Grid>
        </>
    )
}