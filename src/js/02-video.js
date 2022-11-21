import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

player.on("timeupdate", throttle(savePlayerTime,1000));
player.on('loaded', updatePlayerTime);

function savePlayerTime({seconds}) {
    localStorage.setItem("videoplayer-current-time",seconds);
};

function updatePlayerTime() {
    if (localStorage.getItem("videoplayer-current-time")){
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}};