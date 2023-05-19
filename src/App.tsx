import React from 'react';
import './App.module.css';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import styles from './App.module.css'
import Card from '../src/components/Card'

function App() {
    return (
        <div className={styles.wrapper}>
            <Navbar/>
            <Card>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/skills" element={<Skills/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                </Routes>
            </Card>

            {/*<Footer/>*/}
        </div>
    );
}

export default App;
