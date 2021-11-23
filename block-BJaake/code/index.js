let input = document.querySelector("input");

let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;

function fetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = XMLHttpRequest;
    xhr.open("GET", url);
    xhr.onload(resolve(JSON.parse(xhr.response)));
    xhr.onerror(reject("somethoing went Wrong"));
    xhr.send();
  });
}

function displayImage(images) {
  const mainDiv = document.querySelector(".main-div");
  images.forEach((image) => {
    let img = document.createElement("img");
    img.src = image.imageUrl;
    mainDiv.appendChild(img);
  });
}
fetch(url).then(displayImage);

function handleSearch(event) {}

input.addEventListener("Click", handleSearch);
