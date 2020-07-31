import { radioPlayerInit } from './radioPlayer.js';
import { musicInit } from './music.js';
import { videoPlayerInit } from './videoPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
  playerBlock = document.querySelectorAll('.player-block'),
  temp = document.querySelector('.temp');

const deactivationPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item => item.classList.remove('active'));
  playerBlock.forEach(item => item.classList.remove('active'));

  musicInit.stop();
  videoPlayerInit.stop();
  radioPlayerInit.stop();

};

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
  deactivationPlayer();
  btn.classList.add('active');
  playerBlock[i].classList.add('active');
}));

videoPlayerInit();
radioPlayerInit();
musicInit();
