//select elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_TROUGH = "lineThrough";

//Show date
const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  };
  const today = new Date();
  // dateElement.innerHTML = today.toLocaleDateString("en-US", options);
  document.getElementById("date").innerHTML = today.toLocaleDateString(
    "en-US",
    options
  );