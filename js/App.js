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

//variables
let LIST = [],
  id = 0;

// ad toDo function
function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_TROUGH : "";
  const item = `
              <div class="li item">
              <i class="far ${DONE} co" job="complete" id=${id}></i>
              <p class="text" ${LINE}>${toDo}</p>
              <i class="far fa-trash-alt de" job="delete" id=${id}></i>
              </div> 
              `;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
      id++;
    }
    input.value = " ";
  }
});
