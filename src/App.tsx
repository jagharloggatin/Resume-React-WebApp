import React from 'react';
import './App.module.css';
import {Route, Routes} from 'react-router-dom';
import Projects from "./pages/Projects";
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
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
