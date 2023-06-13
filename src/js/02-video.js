import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

const onPlay = function(data) {
  const onTimeUpdate = throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  }, 1000);

  player.off('timeupdate', onTimeUpdate); 
  player.on('timeupdate', onTimeUpdate);
};

player.on('play', onPlay);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  const time = parseFloat(currentTime);
  player.setCurrentTime(time).then(function(seconds) {
    
  }).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
    
        break;

      default:

        break;
    }
  });
}
