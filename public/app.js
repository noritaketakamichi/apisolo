const addImg = async () => {
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
    child.classList.add("member");
    parent.appendChild(child);
  }
};
