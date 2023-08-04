import React from 'react'

import { Link} from "react-router-dom";


const Game = () => {
  return (
    <div>
            <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-emerald-500  text-xl tracking-tight">Les Jeux de Jérôme  {'\u00A0'}{'\u00A0'}: </h1>
                    </div>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow flex justify-evenly">
                        <Link to="/Morpion" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-500 text-lg">
                            Jeux 1 
                        </Link>
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-lg">
                            Jeux 2
                        </Link>
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-lg">
                            Jeux 3
                        </Link>
                    </div>
                </div>
            </nav>
            <br />

        </div>
  )
}

export default Game