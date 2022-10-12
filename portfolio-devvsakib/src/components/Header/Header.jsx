import { useState, React } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import './style.css';
function Header() {
    const [ burgMenu, setState ] = useState(false)
    function showHide(){
        setState(!burgMenu)
        // setState(false)
        // document.getElementById('menuHam').style.display = 'none'
    }
    return (
        <>
            <div className="container">
                <div className="logo">
                    < AllInclusiveIcon className="logo-icon" />
                    <a href="/">DevvSakib</a>
                </div>
                <div className="menuIcon">
                    <MenuIcon id='menuIcon' onClick={showHide} />
                </div>
                <div className="menuContainer">
                    <ul className={burgMenu ?  " " : " hide"}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header