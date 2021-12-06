// let input = document.querySelector("input");

let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let newsElm = document.querySelector(".news");
// function fetch(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = XMLHttpRequest;
//     xhr.open("GET", url);
//     xhr.onload(resolve(JSON.parse(xhr.response)));
//     xhr.onerror(reject("somethoing went Wrong"));
//     xhr.send();
//   });
// }

function renderNews(news) {
  news.forEach((newsItem) => {
    let li = document.createElement("li");
    li.classList.add("main-div");
    let img = document.createElement("img");
    img.src = newsItem.imageUrl;
    img.alt = newsItem.title;
    let div = document.createElement("div");
    div.classList.add(".para");
    let h2 = document.createElement("h2");
    h2.innerText = newsItem.newsSite;
    let p = document.createElement("p");
    p.innerText = newsItem.summary;
    let a = document.createElement("a");
    a.href = newsItem.url;
    let button = document.createElement("button");
    button.innerText = "Read More";
    a.append(button);
    div.append(h2, p, a);
    li.append(img, div);
    newsElm.append(li);
  });
}

// function displayImage(images) {
//   // const mainDiv = document.querySelector(".main-div");
//   images.forEach((image) => {
//     let li = document.createElement("li");
//     let img = document.createElement("img");
//     img.src = image.imageUrl;
//     mainDiv.appendChild(img);
//   });
// }
fetch(url)
  .then((res) => res.json())
  .then((news) => {
    renderNews(news);
  })
  .catch((li.innerText = "check you internet connection"));

// function handleSearch(event) {}

// input.addEventListener("Click", handleSearch);
