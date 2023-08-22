import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PhaserComponent = () => {
  const phaserContainerRef = useRef(null);

  useEffect(() => {
    let playerOne;
    let playerTwo;
    let playerOneJumping = false;
    let playerTwoJumping = false;

    const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight / 1.5,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 750 },
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
      transparent: true,
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('player1', `${process.env.PUBLIC_URL}/p1.png`);
      this.load.image('player2', `${process.env.PUBLIC_URL}/p2.png`);
      this.load.image('background', `${process.env.PUBLIC_URL}/arena.gif`);
    }

    function create() {
      const background = this.add.sprite(0, 0, 'background');
      background.setOrigin(0, 0);
      background.setScale(window.innerWidth / background.width, window.innerHeight / 1.5 / background.height);

      const playerWidth = this.textures.get('player1').getSourceImage().width * 0.1;
      const playerHeight = this.textures.get('player1').getSourceImage().height * 0.1;

      const playerOneX = playerWidth / 2;
      const playerOneY = game.config.height - playerHeight / 2;

      const playerTwoX = game.config.width - playerWidth / 2;
      const playerTwoY = game.config.height - playerHeight / 2;

      playerOne = this.physics.add.sprite(playerOneX, playerOneY, 'player1');
      playerOne.setCollideWorldBounds(true);
      playerOne.setScale(0.28);

      playerTwo = this.physics.add.sprite(playerTwoX, playerTwoY, 'player2');
      playerTwo.setCollideWorldBounds(true);
      playerTwo.setScale(0.5);
    }

    function update() {
      handlePlayerOneMovement.call(this);
      handlePlayerTwoMovement.call(this);
      handlePlayerOneJump.call(this);
      handlePlayerTwoJump.call(this);
      handlePlayerOneAttack.call(this);

      // Check if player one is landing
      if (playerOne.body.blocked.down && playerOneJumping) {
        playerOneJumping = false;
      }

      // Check if player two is landing
      if (playerTwo.body.blocked.down && playerTwoJumping) {
        playerTwoJumping = false;
      }
    }

    function handlePlayerOneMovement() {
      const keys = this.input.keyboard.addKeys('Q,D');

      if (keys.Q.isDown) {
        playerOne.setVelocityX(-160);
        playerOne.flipX = true;
      } else if (keys.D.isDown) {
        playerOne.setVelocityX(160);
        playerOne.flipX = false;
      } else {
        playerOne.setVelocityX(0);
      }
    }

    function handlePlayerOneAttack() {
      const keys = this.input.keyboard.addKeys('A,E');
    
      if (keys.A.isDown) {
        if (!keys.A.isProcessed) {
          console.log('Attack 1 du Player 1');
          keys.A.isProcessed = true;
        }
      } else {
        keys.A.isProcessed = false;
      }
    
      if (keys.E.isDown) {
        if (!keys.E.isProcessed) {
          console.log('Attack 2 du Player 1');
          keys.E.isProcessed = true;
        }
      } else {
        keys.E.isProcessed = false;
      }
    }
    function handlePlayerTwoMovement() {
      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.left.isDown) {
        playerTwo.setVelocityX(-160);
        playerTwo.flipX = false;
      } else if (cursors.right.isDown) {
        playerTwo.setVelocityX(160);
        playerTwo.flipX = true;
      } else {
        playerTwo.setVelocityX(0);
      }
    }

    function handlePlayerOneJump() {
      const keyZ = this.input.keyboard.addKey('Z');

      if (keyZ.isDown && playerOne.body.blocked.down) {
        playerOne.setVelocityY(-300);
        playerOneJumping = true;
      }
    }

    function handlePlayerTwoJump() {
      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.up.isDown && playerTwo.body.blocked.down) {
        playerTwo.setVelocityY(-300);
        playerTwoJumping = true;
      }
    }

    return () => {
      game.destroy();
    };
  }, []);

  return <div ref={phaserContainerRef}>Vous trouverez ci-dessous mon jeu</div>;
};

export default PhaserComponent;