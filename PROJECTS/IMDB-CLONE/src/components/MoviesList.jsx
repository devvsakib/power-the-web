import { List, ListItem, Typography, styled } from "@mui/material";

import { Star } from '@mui/icons-material';
const Banner = styled('img')({

    width: 70,
    height:70
})

const Container = styled(List)`
background:		#28282B;
display:flex;
border-radius:10px;
margin-top:6px;
`


const MoviesList = ({movies}) => {
    return (
        <>
            {
                movies.map(movie => (
                    
                        <Container>
                            <ListItem>
                                <Banner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                        </ListItem>
                        <ListItem>
                            <Typography style={{color:'#fff',fontFamily:'Calibri'}}>{movie.original_title}</Typography>
                        </ListItem>
                        <ListItem>< Star color="warning"/>
                            <Typography style={{color:'#fff'}}>{movie.vote_average}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography style={{color:'#fff'}}>{movie.release_date}</Typography>
                        </ListItem>
                        </Container>
                    
                ))
        }
        </>
    )
}
export default MoviesList;