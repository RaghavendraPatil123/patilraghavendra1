import { Grid,Typography ,Button} from "@mui/material"
import BlogCard from "../../Components/BlogCard";
export default function(){
  
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
                                >Blog
                                </Typography>
                                </div>
        </Grid>
        </Grid>
        <BlogCard
        head="Posted on May 22, 2023"
        title="Randon Pexson, Eventer’s CEO, announced as headliner of the Eventer Conference 2022"
        image="http://events2go.com.au/uploads/blog/post/devim_1407882437.jpg"
        para="It has survived not only five centuries, but also the leap into electronic typesetting, remaining..."
        more="More Details"
        />
        <BlogCard
        head="Posted on May 18, 2023"
        title="Eventer Careers: Top 4 tips to get your foot in the door"
        image="http://events2go.com.au/uploads/blog/post/devim_2057839072.jpg"
        para="Reference site about Lorem Ipsum, giving information on its origins, as well as a random..."
        more="More Details"
        />
        <BlogCard
        head="Posted on May 18, 2023"
        title="First Speakers of Eventry Conference 2023 announced!"
        image="http://events2go.com.au/uploads/blog/post/devim_854574434.jpg"
        para="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing..."
        more="More Details"
        />
        <BlogCard
        head="Posted on May 17, 2023"
        title="Eventer Careers: Top 4 tips to get your foot in the door"
        image="http://events2go.com.au/uploads/blog/post/devim_1335223258.png"
        para="Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida..."
        more="More Details"
        />
        </>
       )
    }
