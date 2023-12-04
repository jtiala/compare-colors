const color1div = document.querySelector("#color1");
const color2div = document.querySelector("#color2");
const color1input = document.querySelector("#color1 input");
const color2input = document.querySelector("#color2 input");

function setColors() {
  color1div.style.background = color1input.value;
  color2div.style.background = color2input.value;

  let searchParams = new URLSearchParams(window.location.search);

  searchParams.set("1", color1input.value);
  searchParams.set("2", color2input.value);

  history.pushState(
    null,
    "",
    window.location.pathname + "?" + searchParams.toString()
  );
}

color1input.addEventListener("change", setColors);
color2input.addEventListener("change", setColors);

function setInitialColors() {
  const searchParams = new URLSearchParams(document.location.search);
  const color1 = searchParams.get("1") || "tomato";
  const color2 = searchParams.get("2") || "salmon";

  color1input.value = color1;
  color2input.value = color2;

  color1div.style.background = color1;
  color2div.style.background = color2;
}

setInitialColors();
