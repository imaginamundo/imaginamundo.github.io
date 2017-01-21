'use strict';

(function() {
    // music
    var music = document.getElementById('story-music-box');
    document.getElementById('play-a-song-for-me').addEventListener('click', function(e) {
        if (this.classList.contains('icon-pause')) {
            music.pause();
            this.classList.remove('icon-pause');
            this.classList.add('icon-play');
        }
        else {
            music.play();
            this.classList.remove('icon-play');
            this.classList.add('icon-pause');
        }
    });

    music.onended = function() {
        document.getElementById('play-a-song-for-me').classList.remove('icon-play', 'icon-pause');
        document.getElementById('play-a-song-for-me').classList.add('icon-pause');
    };
})();