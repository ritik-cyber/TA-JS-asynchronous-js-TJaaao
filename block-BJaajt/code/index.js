let input = document.querySelector("input");
let info = document.querySelector(".info");
let userImage = document.querySelector(".info img");
let userName = document.querySelector(".info h2");
let userLogin = document.querySelector(".info p");
let followers = document.querySelector(".followers");
let following = document.querySelector(".following");

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    console.error("Something Wnet Wrong");
  };
  xhr.send();
}

function displayExtraInifo(url, rootElm) {
  rootElm.innerHTML = "";
  fetch(url, function (followersList) {
    let topFive = followersList.slice(0, 5);
    topFive.forEach((info) => {
      let li = document.createElement("li");
      let img = document.createElement("img");
      img.classList.add("img-person");
      img.src = info.avatar_url;
      li.append(img);
      rootElm.append(li);
    });
  });
}

// function displayFollowing(username) {
//   following.innerHTML = "";
//   fetch(
//     `https://api.github.com/users/${username}/following`,
//     function (followingList) {
//       let topFive = followingList.slice(0, 5);
//       topFive.forEach((info) => {
//         let li = document.createElement("li");
//         let img = document.createElement("img");
//         img.classList.add("img-person");
//         img.src = info.avatar_url;
//         li.append(img);
//         following.append(li);
//       });
//     }
//   );
// }

function displayHandle(userInfo) {
  userImage.src = userInfo.avatar_url;
  userImage.alt = userInfo.name;
  userName.innerText = userInfo.name;
  userLogin.innerText = userInfo.login;
  displayExtraInifo(
    `https://api.github.com/users/${userInfo.login}/followers`,
    followers
  );
  displayExtraInifo(
    `https://api.github.com/users/${userInfo.login}/following`,
    following
  );
}

function handleInput(event) {
  //   console.log(event.keyCode);
  if (event.keyCode === 13 && input.value) {
    const url = "https://api.github.com/users/";
    let username = input.value;
    console.log(url + username, "hello");
    fetch(url + username, displayHandle);
    input.value = "";
  }
}

input.addEventListener("keydown", handleInput);

let catImg = document.querySelector(".cat-img");
let catBtn = document.querySelector(".btn");

function handleChange() {
  fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&size=full`,
    function (catInfo) {
      catImg.src = catInfo[0].url;
    }
  );
}

catBtn.addEventListener("click", handleChange);
