console.log("Welcome to spotify")
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
// let gif=getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let mastersongname = document.getElementById('mastersongname')


let songs = [
    { songName: "LET ME LOVE YOU", filePath: "1.mp3", coverPath: "bg.jpeg" },
    { songName: "FEEL INVINCIBLE", filePath: "2.mp3", coverPath: "bg.jpeg" }
]

songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
})



let audioelement = new Audio('1.mp3')
//  audioelement.play();

//handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        //change the button type when you press the play/pause button.
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        // gif.style.opacity=1;

    }
    else {
        audioElement.pause();
        //change the button type when you press the paly/pause button.
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        // gif.style.opacity=0;
    }
})


//listen to events
audioElement.addEventListener('timeupdate', () => {
    //update the seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        songIndex = parseInt(e.target.id)
        console.log(e);
        makeallplays();
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `${songIndex + 1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 1) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})