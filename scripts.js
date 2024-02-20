const defaultColor1 = "tomato";
const defaultColor2 = "salmon";

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const input1 = document.querySelector("#div1 input");
const input2 = document.querySelector("#div2 input");

input1.addEventListener("change", eventListener);
input2.addEventListener("change", eventListener);

setInitialColors();

function eventListener() {
  setBackgroundColors(input1.value, input2.value);
  setSearchParams(input1.value, input2.value);
}

function setBackgroundColors(color1, color2) {
  div1.style.background = color1;
  div2.style.background = color2;
}

function setInputValues(color1, color2) {
  input1.value = color1;
  input2.value = color2;
}

function setSearchParams(color1, color2) {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set("1", color1);
  searchParams.set("2", color2);

  history.pushState(
    null,
    "",
    `${window.location.pathname}?${searchParams.toString()}`
  );
}

function setInitialColors() {
  const searchParams = new URLSearchParams(document.location.search);
  const color1 = searchParams.get("1") || defaultColor1;
  const color2 = searchParams.get("2") || defaultColor2;

  setInputValues(color1, color2);
  setBackgroundColors(color1, color2);
}
