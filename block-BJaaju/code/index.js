// let input = document.querySelector("input");
// function handleSumbit(event) {
//   if (event.keyCode === 13 && input.value) {
//     let value = input.value;
//     console.log(value);
//   }
// }

// input.addEventListener("keydown", handleSumbit);
const url =
  "https://api.unsplash.com/photos/?client_id=3vt4Pgiypd6m7iDN4KmaZlQq5uwngLrT1S3uRy-tRPE";

let root = document.querySelector(".root");

function fetch(url, successHandler) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));
  xhr.onerror = function () {
    console.log("somehting went wrong");
  };
  xhr.send();
}

fetch(url, function (images) {
  images.forEach((image) => {
    let li = document.createElement(li);
    let img = document.createElement(img);
    img.src = image.urls.small;
    li.append(img);
    root.append(li);
  });
});
