const showMember = async () => {
  console.log(111);

  //remove photo
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let str = document.getElementById("input").value;
  let url;
  if (str) {
    url = `http://localhost:7000/api/members/search/${str}`;
  } else {
    url = `http://localhost:7000/api/members`;
  }
  let fetched = await fetch(url).catch(() => console.log("error1"));
  let members = await fetched.json().catch(() => console.log("error2"));
  for (let member of members) {
    const imgURL = member.photoURL;
    let child = document.createElement("img");
    child.src = imgURL;
    child.alt = member.name;
    child.classList.add("member");
    parent.appendChild(child);
  }
};

//add member
const addMember = async () => {
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let str = document.getElementById("input").value;
  let url;
  if (str) {
    url = `http://localhost:7000/api/members/${str}`;
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
    child.innerText = `input member name`;
    parent.appendChild(child);
    allMemberURL = `http://localhost:7000/api/members`;
    let memberfetched = await fetch(allMemberURL).catch(() =>
      console.log("error1")
    );
    let members = await memberfetched.json().catch(() => console.log("error2"));
    let str = "";
    for (let member of members) {
      console.log(member);
      let memberElm = document.createElement("p");
      memberElm.innerText = member.name;
      parent.appendChild(memberElm);
    }
  }
};

//delete member
const deleteMember = async () => {
  const parent = document.getElementById("flame");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  let str = document.getElementById("input").value;
  let url;
  if (str) {
    url = `http://localhost:7000/api/members/${str}`;
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
    child.innerText = `input member name`;
    parent.appendChild(child);
    allMemberURL = `http://localhost:7000/api/members`;
    let memberfetched = await fetch(allMemberURL).catch(() =>
      console.log("error1")
    );
    let members = await memberfetched.json().catch(() => console.log("error2"));
    let str = "";
    for (let member of members) {
      console.log(member);
      let memberElm = document.createElement("p");
      memberElm.innerText = member.name;
      parent.appendChild(memberElm);
    }
  }
};

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
    child.classList.add("song");
    parent.appendChild(child);
  }
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
