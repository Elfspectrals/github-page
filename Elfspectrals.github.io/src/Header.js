import React from 'react';
import { Link, Route, Routes } from "react-router-dom";

import ShowCase from "./3D/ShowCase/ShowCase";
import Contact from './Contact/Contact';
import Error from './Error';
import ThreeJS from './ThreeJS';
import Home from './Home';

//Route des jeux
import Game from './Game/Game';
import Morpion from './Game/Morpion/Morpion';
import Phaser from './Game/Phaser/Phaser';


const Header = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <div className="flex items-center">
                        {/* <img src={process.env.PUBLIC_URL + "/assets/img/maison.png"} className="h-8 w-8 mr-2" alt="Une maison réalisé par FreePik" /> */}
                        <h1 className="font-semibold text-xl tracking-tight">Les Merveilles de Jérôme  {'\u00A0'}{'\u00A0'}: </h1>
                    </div>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow flex justify-evenly">
                        
                        <Link to="/showCase" className="block mt-4 lg:inline-block lg:mt-0 text-6xl">
                        💡
                        </Link>
                        <Link to='/game'  className='block mt-4 lg:inline-block lg:mt-0 text-6xl'>
                        🎮
                        </Link>
                        <Link to ="/ThreeJS" className='block mt-4 lg:inline-block lg:mt-0 text-6xl'>
                        🚀
                        </Link>
                        <Link to="/contact" className='block mt-4 lg:inline-block lg:mt-0 text-6xl'>
                            ✉️
                        </Link>
                    </div>
                </div>
            </nav>
            <br />
            <Routes>
                <Route path='/github-page' element={<Home/>} />

                {/* Redirige vers la partie modélisation 3D  */}
                <Route path="/showCase" element={<ShowCase />} />
                
                {/* Redirige vers le contact */}
                <Route path="/contact" element={<Contact />} />

                {/* Redirige vers mes jeux */}
                <Route path='/game' element={<Game/>} />
                    <Route path='/Morpion' element={<Morpion />} />
                    <Route path='/Phaser' element={<Phaser />} />

                {/* Redirige vers la modélisation 3D */}
                <Route path='/ThreeJS' element= { <ThreeJS/>} />

                {/* Redirige vers page 404 */}
                <Route path='*' element={<Error />} />
            
            </Routes>
        </div>
    );
};

export default Header;