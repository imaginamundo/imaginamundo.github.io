'use strict';

(function() {
    // music
    var music = document.getElementById('story-music-box');
    document.getElementById('play-a-song-for-me').addEventListener('click', function(e) {
        if (music.paused) {
            music.pause();
        }
        else {
            music.play();
        }
    });

    music.onended = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-pause');
    };
    music.onplay = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-pause');
    };
    music.onpause = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-play');
    };
})();