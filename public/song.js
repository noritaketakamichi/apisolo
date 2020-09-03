const showSong = async () => {
  console.log(111);

  //remove photo
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let str = document.getElementById("input").value;
  let url;
  if (str) {
    url = `http://localhost:7000/api/songs/search/${str}`;
  } else {
    url = `http://localhost:7000/api/songs`;
  }
  let fetched = await fetch(url).catch(() => console.log("error1"));
  let songs = await fetched.json().catch(() => console.log("error2"));
  for (let song of songs) {
    const imgURL = song.photoURL;
    let child = document.createElement("img");
    child.src = imgURL;
    child.alt = song.name;
    child.id = song.id;
    child.classList.add("song");
    child.addEventListener("click", function() {
      showSongMessage(this.id);
    });
    parent.appendChild(child);
  }
};

const showSongMessage = async id => {
  console.log(`Hello${name}`);
  //remove photo
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  const url = `http://localhost:7000/api/songs/search/${id}`;
  let fetched = await fetch(url).catch(() => console.log("error1"));
  let member = await fetched.json().catch(() => console.log("error2"));
  let child = document.createElement("img");
  child.src = member.photoURL;
  child.classList.add("singlesong");
  parent.appendChild(child);
  let pTag = document.createElement("p");
  pTag.innerHTML = member.name;
  parent.appendChild(pTag);
};

//add song
const addSong = async () => {
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let str = document.getElementById("input").value;
  let url;
  if (str) {
    url = `http://localhost:7000/api/songs/${str}`;
    let flag = false;
    let fetched = await fetch(url, {
      method: "POST"
    }).catch(() => (flag = true));
    let members = await fetched.json().catch(() => (flag = true));
    let child = document.createElement("p");
    if (flag) {
      child.innerText = "ERROR occured";
    } else {
      child.innerText = `${str} was added`;
    }
    parent.appendChild(child);
  } else {
    let child = document.createElement("p");
    child.innerText = `input song name`;
    parent.appendChild(child);
    allSongURL = `http://localhost:7000/api/songs`;
    let songfetched = await fetch(allSongURL).catch(() =>
      console.log("error1")
    );
    let songs = await songfetched.json().catch(() => console.log("error2"));
    let str = "";
    for (let song of songs) {
      console.log(song);
      let songElm = document.createElement("p");
      songElm.innerText = song.name;
      parent.appendChild(songElm);
    }
  }
};

//delete song
const deleteSong = async () => {
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let str = document.getElementById("input").value;
  let url;
  if (str) {
    url = `http://localhost:7000/api/songs/${str}`;
    let flag = false;
    let fetched = await fetch(url, {
      method: "DELETE"
    }).catch(() => (flag = true));
    let members = await fetched.json().catch(() => (flag = true));
    let child = document.createElement("p");
    if (flag) {
      child.innerText = "ERROR occured";
    } else {
      child.innerText = `${str} was deleted`;
    }
    parent.appendChild(child);
  } else {
    let child = document.createElement("p");
    child.innerText = "input song name";
    parent.appendChild(child);
  }
};
