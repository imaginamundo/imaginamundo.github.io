'use strict';

(function() {
    // music
    var music = document.getElementById('story-music-box');
    document.getElementById('play-a-song-for-me').addEventListener('click', function(e) {
        if (music.paused) {
            music.play();
        }
        else {
            music.pause();
        }
    });
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


    music.loadstart = function() {
        document.getElementById('music-loader').classList.add('active');
    }
    music.onloadeddata = function() {
        document.getElementById('music-loader').classList.remove('active');
    }
})();