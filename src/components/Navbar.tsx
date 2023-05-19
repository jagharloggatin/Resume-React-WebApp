import React from 'react';
import {Link} from 'react-router-dom';
import styles from './styles/Navbar.module.css'

const Navbar: React.FC = () => {
    return (

        <nav className={styles.navbar}>
            <ul>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        About
                    </li>
                </Link>
                <Link to="/projects">
                    <li>
                        Projects
                    </li>
                </Link>
                <Link to="/skills">
                    <li>
                        Skills
                    </li>
                </Link>
                <Link to="/contact">
                    <li>
                        Contact
                    </li>
                </Link>
            </ul>
        </nav>

    );
};

export default Navbar;