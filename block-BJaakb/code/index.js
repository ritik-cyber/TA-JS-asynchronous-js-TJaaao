let searchElm = document.querySelector("input");
let root = document.querySelector(".root");

const searchUrl = (query) =>
  `https://api.unsplash.com/search/photos?query=${query}&client_id=VayJM5gFpgw4UsvS8wyddd97zhzIZUyAZ4ptRCGNQZw`;

const url =
  "https://api.unsplash.com/photos/?client_id=VayJM5gFpgw4UsvS8wyddd97zhzIZUyAZ4ptRCGNQZw";

// function fetch(url, successHandler) {
//   console.log(url, successHandler);
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.onload = () => successHandler(JSON.parse(xhr.response));
//   // console.log(successHandler);
//   xhr.onerror = function () {
//     console.log("somehting went wrong");
//   };
//   xhr.send();
// }

function fetch(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => res(JSON.parse(xhr.response));
    xhr.onerror = () => rej("Sonethig went wrong");
    xhr.send();
  });
}

function displayImage(images) {
  root.innerHTML = "";
  images.forEach((image) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = image.urls.small;
    li.append(img);
    root.append(li);
  });
}

fetch(url)
  .then(displayImage)
  .catch((error) => console.log(error));

function handleSearch(event) {
  if (event.keyCode === 13 && searchElm.value) {
    fetch(searchUrl(searchElm.value)).then((searchResult) => {
      displayImage(searchResult.results);
    });
  }
}

searchElm.addEventListener("keyup", handleSearch);
