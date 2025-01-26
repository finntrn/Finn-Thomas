document.addEventListener("DOMContentLoaded", () => {
    const songs = [
        { id: "imnotready", src: "audio/imnotready.mp3", title: "I'M NOT READY" },
        { id: "iwasaghost", src: "audio/iwasaghost.mp3", title: "I WAS A GHOST" },
        { id: "inyourroom", src: "audio/inyourroom.mp3", title: "IN YOUR ROOM" }, 
        { id: "lyingdeadinthesun", src: "audio/lyingdeadinthesun.mp3", title: "LYING DEAD IN THE SUN" },
        { id: "easy", src: "audio/easy.mp3", title: "LYING DEAD IN THE SUN" },
        { id: "youshouldvesaidgoodbye", src: "audio/youshouldvesaidgoodbye.mp3", title: "You Should've Said Goodbye." },
        // Add more songs here...
    ];

    const audioPlayer = document.getElementById("audioPlayer");

    songs.forEach(song => {
        const songDiv = document.getElementById(song.id);
        songDiv.addEventListener("click", () => {
            audioPlayer.src = song.src;
            audioPlayer.play();
            updateNowPlaying(song.title);
        });
    });

    function updateNowPlaying(title) {
        const nowPlaying = document.getElementById("nowPlaying");
        if (nowPlaying) {
            nowPlaying.textContent = `Now Playing: ${title}`;
        }
    }
});
