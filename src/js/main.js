'use strict';

(function() {
    // music
    var music = document.getElementById('story-music-box');
    var musicLoader = document.getElementById('music-loader');
    document.getElementById('play-a-song-for-me').addEventListener('click', function(e) {
        if (music.paused) {
            music.play();
        }
        else {
            music.pause();
        }

        if (music.readyState < 4) {
            musicLoader.classList.add('active');
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
    music.addEventListener("ended", function () {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-play');
    });
})();