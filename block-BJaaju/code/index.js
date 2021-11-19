let input = document.querySelector("input");

function handleSumbit(event) {
  if (event.keyCode === 13 && input.value) {
    let value = input.value;
    console.log(value);
  }
}

input.addEventListener("keydown", handleSumbit);
