function loadMusicList() {
  musicList.innerHTML = "";

  musicsData.forEach((data, index) => {
    musicList.innerHTML += `
    <div class="listItem" data-index="${index}" onclick="playMusic(${index})">
      <img class="miniCover" src="${data.cover}" alt="" />
      <div>
      <p class="listMusicName">${data.name}</p>
      <p class="listMusicArtist">${data.artist}</p>
      </div>
      <div class="equalizerIcon">
      <i class='bx bxs-bar-chart-alt-2 bx-flashing' ></i>
      </div>
    </div>
    `;
  });
}

function playMusic(index) {
  currentMusic.pause();
  currentMusic.currentTime = 0;

  currentMusic = new Audio(musicsData[index].audioLocation);
  currentMusic.play();
  loadPlayer(index);
  playerControls(index);
  activeMusicIndex = index;
  document.title = `${musicsData[index].name}`;

  timeInterval = setInterval(updateProgress, 1000);
}

function loadPlayer(musicIndex) {
  musicMarker(musicIndex);
  musicPlayer.innerHTML = `
    <img src="${musicsData[musicIndex].cover}" alt="" class="coverImage" />
    <div class="playerInfo">
      <h3 class="musicNameText">${musicsData[musicIndex].name}</h3>
      <p class="artistNameText">${musicsData[musicIndex].artist}</p>
    </div>
    <div class="progressBar">
      <div class="progress"></div>
    </div>
    <div class="timeSection">
       <p class="currentTimeText">00:00 </p>
       <p class="durationText">59:59 </p>
    </div>
    
    <div class="PlayerButtons">
     <div class="shuffleBtn "><i class='bx bx-shuffle' ></i></div>
      <div class="prevTrackBtn"><i class='bx bx-skip-previous' ></i></div>
      <div class="playBtn" > <i class='bx bx-pause'></i></div>
      <div class="nxtTrackBtn"><i class='bx bx-skip-next' ></i></div>
      <div class="repeatBtn"><i class='bx bx-repeat'></i></div>
    </div>
    `;

  shuffleBtn = document.querySelector(".shuffleBtn");
  repeatBtn = document.querySelector(".repeatBtn");

  if (isShuffling) {
    shuffleBtn.classList.add("activeBtn");
  } else {
    shuffleBtn.classList.remove("activeBtn");
  }

  if (isRepeating) {
    repeatBtn.classList.add("activeBtn");
  } else {
    repeatBtn.classList.remove("activeBtn");
  }

  shuffleBtn.addEventListener("click", () => {
    shuffleBtn.classList.toggle("activeBtn");
    isShuffling = !isShuffling;
    console.log(isShuffling);
  });
  repeatBtn.addEventListener("click", () => {
    repeatBtn.classList.toggle("activeBtn");
    isRepeating = !isRepeating;
    console.log(isRepeating);
  });

  progressBarContainer = document.querySelector(".progressBar");
  
  progressBarContainer.addEventListener("click", (e) => {
   setMusicProgress(e);
  });
}


function setMusicProgress(event) {
  currentMusic.pause();
  const width = progressBarContainer.clientWidth;
  const clickX = event.offsetX;
  const duration = currentMusic.duration;

  currentMusic.currentTime = (clickX / width) * duration;
  currentMusic.play();
}

function updateProgress() {
  let progress = document.querySelector(".progress");
  let currentTime = document.querySelector(".currentTimeText");
  let duration = document.querySelector(".durationText");

  progress.style.width = `${
    (currentMusic.currentTime / currentMusic.duration) * 100
  }%`;

  currentTime.innerHTML = timeConvert(currentMusic.currentTime);
  duration.innerHTML = timeConvert(currentMusic.duration);

  if (currentMusic.ended) {
    clearInterval(timeInterval);
    nextTrack(activeMusicIndex);
  }
}

function timeConvert(time) {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = "0" + min;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}

function playerControls(index) {
  let prevTrackBtn = document.querySelector(".prevTrackBtn");
  let playBtn = document.querySelector(".playBtn");
  let nxtTrackBtn = document.querySelector(".nxtTrackBtn");
  playBtn.addEventListener("click", () => {
    if (currentMusic.paused) {
      currentMusic.play();
      playBtn.innerHTML = `<i class='bx bx-pause'></i>`;
    } else {
      currentMusic.pause();
      playBtn.innerHTML = `<i class='bx bx-play'></i>`;
    }
  });

  prevTrackBtn.addEventListener("click", () => {
    prevTrack(index);
  });
  nxtTrackBtn.addEventListener("click", () => {
    nextTrack(index);
  });
}

function nextTrack(index) {
  if (isShuffling) {
    let randomIndex = Math.floor(Math.random() * musicsData.length);
    playMusic(randomIndex);
  } else {
    if (isRepeating) {
      playMusic(index);
    } else {
      if (index == musicsData.length - 1) {
        playMusic(0);
      } else {
        playMusic(index + 1);
      }
    }
  }

  //   if (index == musicsData.length - 1) {
  //     playMusic(0);
  //   } else {
  //     playMusic(index + 1);
  //   }
}

function prevTrack(index) {
  if (index == 0) {
    playMusic(musicsData.length - 1);
  } else {
    playMusic(index - 1);
  }
}

function musicMarker(index) {
  let listItems = document.querySelectorAll(".listItem");
  let equalizerIcon = document.querySelectorAll(".equalizerIcon");

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("activelistItem");
    equalizerIcon[i].style.display = "none";
  }

  listItems[index].classList.add("activelistItem");
  equalizerIcon[index].style.display = "block";
}

function footerYear() {
  const yearSpan = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearSpan.innerHTML = currentYear == 2024 ? "" : `-${currentYear}`;
}

loadMusicList();
