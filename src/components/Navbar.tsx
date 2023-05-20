import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles/Navbar.module.css'
import InfoIcon from '@mui/icons-material/InfoOutlined';
import WorkIcon from '@mui/icons-material/WorkOutline';
import SkillsIcon from '@mui/icons-material/BuildOutlined';
import ContactIcon from '@mui/icons-material/CallOutlined';
// import { styled } from "@mui/system";

const Navbar: React.FC = () => {
    return (

        <nav className={styles.navbar}>
            <ul>
                <Link to="/">
                    <li>
                        <span className={styles.icon}><InfoIcon/></span> ABOUT
                    </li>
                </Link>
                <Link to="/projects">
                    <li>
                        <span className={styles.icon}><WorkIcon/></span>WORK
                    </li>
                </Link>
                <Link to="/skills">
                    <li>
                        <span className={styles.icon}><SkillsIcon/></span>SKILLS
                    </li>
                </Link>
                <Link to="/contact">
                    <li>
                        <span className={styles.icon}><ContactIcon/></span>CONTACT
                    </li>
                </Link>
            </ul>
        </nav>

    );
};

export default Navbar;