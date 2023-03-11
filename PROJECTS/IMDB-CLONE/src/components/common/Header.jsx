import { AppBar, Toolbar,styled, Box, Typography, InputBase } from '@mui/material';
import { logoURL } from '../../constants/constant';
import{  Menu,BookmarkAdd, ExpandMore} from '@mui/icons-material';
import { useState } from 'react';
//component
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../../constants/route';
const StyledToolbar = styled(Toolbar)`
background:#121212;
min-height:56px !important;
padding:0 70px !important;
justify-content:space-between;
&>*{
    padding:0 12px;
}
&>div{
    display:flex;
    align-items:center;
    cursor:pointer;
    &>p{
        font-size:14px;
        font-weight:600;
    }
}
&>p{
    font-size:14px;
    font-weight:600;
}
`;
const InputSearchField = styled(InputBase)`
background:#FFFFFF;
height:30px;
width:55%;
border-radius:5px;
`
const Logo = styled('img')({
    width: 64,
    
})



const Header = () => {
    const navigate = useNavigate(null);
    const [open, setOpen] = useState(null);
    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }
    const handleClose = () => {
        setOpen(null);
    }
    return (
        <AppBar position='static'>
            <StyledToolbar>
                <Logo src={logoURL} alt="logo" onClick={() => navigate(routePath.home)} style={{cursor:'pointer'}} />
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>

                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <InputSearchField />
                <Typography>IMDB<Box component="span"style={{color:'blue'}}>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>watchlist</Typography>
                </Box>
                <Typography>Sign In</Typography>
                <Box>
                    <Typography>En</Typography>
                    <ExpandMore/>
                </Box>



            </StyledToolbar>
       </AppBar>
    )
}
export default Header;