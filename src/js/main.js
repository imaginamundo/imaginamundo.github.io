'use strict';

(function() {
    // music
    var music = document.getElementById('story-music-box');
    var musicLoader = document.getElementById('music-loader');
    document.getElementById('play-a-song-for-me').addEventListener('click', function(e) {
        musicLoader.classList.add('active');
        if (music.paused) {
            music.play();
        }
        else {
            music.pause();
        }
    });

    music.oncanplaythrough = function() {
        musicLoader.classList.remove('active');
    }

    music.onplay = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-pause');
    };
    music.onpause = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-play');
    };
    music.onended = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-pause');
    };
})();