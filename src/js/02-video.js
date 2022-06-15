import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

localStorage.setItem("videoplayer-current-time", 0); 

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then().catch();



player.on('timeupdate',throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
},1000));




