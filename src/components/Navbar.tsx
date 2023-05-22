import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles/Navbar.module.css'
import InfoIcon from '@mui/icons-material/InfoOutlined';
import WorkIcon from '@mui/icons-material/WorkOutline';
import SkillsIcon from '@mui/icons-material/BuildOutlined';
import ContactIcon from '@mui/icons-material/CallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// import { styled } from "@mui/system";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={styles.navbar}>
            <ul id={isOpen ? styles.navbarOpen : styles.navbarClose}>

                <li id={styles.logo}>
                    <div id={styles.logoDiv}>
                        <img src='/images/myfavicon.png'/> Resume Project
                    </div>                </li>

                <Link to="/" className={styles.links}>
                    <li>
                        <span className={styles.icon}><InfoIcon/></span> ABOUT
                    </li>
                </Link >
                <Link to="/projects" className={styles.links}>
                    <li>
                        <span className={styles.icon}><WorkIcon/></span>WORK
                    </li>
                </Link>
                <Link to="/contact" className={styles.links}>
                    <li>
                        <span className={styles.icon}><ContactIcon/></span>CONTACT
                    </li>
                </Link>
            </ul>
            <div id={styles.hamburgerMenu} onClick={toggleMenu}>
                {isOpen ? <CloseIcon/> : <MenuIcon/>}
            </div>

        </nav>

    );
};

export default Navbar;


// <div id={styles.logoDiv}>
//     <img src='/images/myfavicon.png'/> Resume Project
// </div>