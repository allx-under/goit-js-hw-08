import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
 
const player = new Player(iframe);

const currentPlayerTime = localStorage.getItem('player-current-time');

function onPlay({seconds}) {
    localStorage.setItem('player-current-time', seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('player-current-time')) {
    player.setCurrentTime(currentPlayerTime);
}
    