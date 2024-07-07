const musicsData = [
  {
    name: "Lay All Your Love On Me",
    artist: "ABBA",
    audioLocation: "./assets/musics/ABBA-Lay All Your Love On Me(Official Lyric Video).mp3",
    cover: "./assets/covers/layallyourlove.jpg",
  },
  {
    name: "Hymn for the Weekend",
    artist: "Coldplay",
    audioLocation: "../assets/musics/Alan Walker vs Coldplay-Hymn For The Weekend.mp3",
    cover: "../assets/covers/hymnof.jpg",
  },
  {
    name: "Angetenar",
    artist: "Rompasso",
    audioLocation: "../assets/musics/Angetenar (Original Mix).mp3",
    cover: "../assets/covers/angetenar.jpg",
  },
  {
    name: "Bloody Mary (Remix)",
    artist: "Lady Gaga",
    audioLocation:
      "../assets/musics/Bloody Mary - Best Part Instrumental (Slowed  Reverb).mp3",
    cover: "../assets/covers/bloodymary.jpg",
  },
  {
    name: "Crystals",
    artist: "Isolate.exe & Andrej Simon",
    audioLocation:
      "../assets/musics/Crystals.mp3",
    cover: "../assets/covers/crystals.jpg",
  },
  {
    name: "Happy Nation",
    artist: "Ace of Base",
    audioLocation:
      "../assets/musics/Happy Nation - Ace of Base (Slowed  Reverb).mp3",
    cover: "../assets/covers/happynation.jpg",
  },
  {
    name: "In the end",
    artist: "Linkin Park & Mellen Gi",
    audioLocation:
      "../assets/musics/Linkin Park - In The End (Mellen Gi & Tommee Profitt Remix).mp3",
    cover: "../assets/covers/intheend.jpeg",
  },
  {
    name: "Little Dark Age",
    artist: "MGMT",
    audioLocation: "../assets/musics/MGMT - Little Dark Age.mp3",
    cover: "../assets/covers/littledarkage.jpg",
  },
  {
    name: "Dark Beach",
    artist: "Pastel Ghost",
    audioLocation:
      "../assets/musics/Pastel Ghost - Dark beach (Tiktok Version).mp3",
    cover: "../assets/covers/darkbeach.jpg",
  },
  {
    name: "The Lost Soul Down X Lost Soul",
    artist: "NBSPLV",
    audioLocation:
      "../assets/musics/The Lost Soul Down X Lost Soul.mp3",
    cover: "../assets/covers/lostsoul.jpg",
  },


  {
    name: "Night Drive",
    artist: "Wilee",
    audioLocation:
      "../assets/musics/Wilee-Night Drive.mp3",
    cover: "../assets/covers/nightdrive.jpg",
  },
];

let musicList = document.querySelector(".musicList");
let musicPlayer = document.querySelector(".musicPlayer");
let coverImage = document.querySelector(".coverImage");
let musicNameText = document.querySelector(".musicNameText");
let artistNameText = document.querySelector(".artistNameText");
let progressBar = document.querySelector(".progressBar");


let listItems;


let equalizerIcon;

let shuffleBtn;

let repeatBtn;

let currentMusic = new Audio();


let timeInterval;


let activeMusicIndex = 0;


let isRepeating = false;

let isShuffling = false;


let htmlTitle = document.querySelector("htmlTitle");
