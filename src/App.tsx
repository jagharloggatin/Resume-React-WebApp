import React from 'react';
import './App.module.css';
import {Route, Routes} from 'react-router-dom';
import Work from "./pages/Work";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/projects" element={<Work/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
