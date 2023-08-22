import React, { useState } from 'react';
import './Morpion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Morpion = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [joueur, setJoueur] = useState('La nouvelle tête de la boîte joue');

  const handleCellClick = (index) => {
    if (board[index] !== '') {
      const sound = new Audio(`${process.env.PUBLIC_URL}/assets/sound/try-again.mp3`);

      sound.play();
      toast.error('Eh oh on joue pas sur la case des autres! 😠', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    } else {
      const updatedBoard = [...board];
      updatedBoard[index] = joueur === 'La nouvelle tête de la boîte joue' ? '🧑‍💻' : '🎮';
      setBoard(updatedBoard);
      setJoueur(joueur === 'La nouvelle tête de la boîte joue' ? 'Le futur alternant joue' : 'La nouvelle tête de la boîte joue');

      checkWinner(updatedBoard); // Vérification du gagnant après chaque coup
    }
  };

  const checkWinner = (currentBoard) => {
    
    const winningCombinations = [
      [0, 1, 2], // lignes horizontales
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // lignes verticales
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonales
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        currentBoard[a] !== '' &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        toast.success(`Le joueur ${joueur} a gagné ! 🎉`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const sound = new Audio(`${process.env.PUBLIC_URL}/assets/sound/pvz-winning-music.mp3`);

      sound.play();
        // Réinitialisation du jeu après la victoire
        setBoard(Array(9).fill(''));
        setJoueur('La nouvelle tête de la boîte joue');
        return;
      }
    }

    // Vérification d'un match nul
    if (!currentBoard.includes('')) {
      
      toast.info("Match nul ! 🙃", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      const sound = new Audio(`${process.env.PUBLIC_URL}/assets/sound/minecraft-villager-sound-effect.mp3`);
      sound.play();

      
      // Réinitialisation du jeu après un match nul
      setBoard(Array(9).fill(''));
      setJoueur('La nouvelle tête de la boîte joue');
    }
  };

  return (
    <div>
      <ToastContainer />
      <h4 className='text-center text-3xl text-yellow-300 underline font-semibold mb-4'>Morpion pour jouer avec un ami (ou seul )</h4>
      <h2 className='text-center text-xl mb-4'>{joueur}</h2>
      <div className="board ">
        {board.map((cell, index) => (
          <div key={index}  className="cell bg-slate-400 text-7xl" onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Morpion;