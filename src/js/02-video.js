import throttle from "lodash.throttle";

const VIDEO_PLAYER_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe'); // Here is libary if VimeoPlayer

const player = new Vimeo.Player(iframe); // initializate player

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay (timer) { // set the last time played seconds in the localStorage
    
    const currentTime =  JSON.stringify(timer);

    localStorage.setItem(VIDEO_PLAYER_TIME , currentTime);

};

const timeOfVideo =  localStorage.getItem(VIDEO_PLAYER_TIME); // get actual time from localStorage

const lastTimeWatch = JSON.parse(timeOfVideo); // parsing data 

player.setCurrentTime(lastTimeWatch.seconds); // set the seconds of last time played at player
