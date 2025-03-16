function togglePlay(btn, id) {
    const audio = document.getElementById(id);
    const progressBar = document.getElementById(`progressBar${id.charAt(id.length - 1)}`);
    const currentTime = document.getElementById(`currentTime${id.charAt(id.length - 1)}`);
    const duration = document.getElementById(`duration${id.charAt(id.length - 1)}`);

    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸️';
    } else {
        audio.pause();
        btn.textContent = '▶️';
    }

    audio.ontimeupdate = () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    };
}

function seekAudio(range, id) {
    const audio = document.getElementById(id);
    audio.currentTime = (range.value / 100) * audio.duration;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}
