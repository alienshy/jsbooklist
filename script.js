let title = document.getElementById("book-title");
let author = document.getElementById("book-author");
let color = document.getElementById("book-color");
let addBtn = document.getElementById("add-btn");
let radioPsychology = document.getElementById("radio-psychology");
let radioDrama = document.getElementById("radio-drama");
let radioMotivation = document.getElementById("radio-motivation");
let table = document.getElementById("book-table");

addBtn.addEventListener("click", () => {
  let titleValue = title.value.trim();
  let authorValue = author.value.trim();
  let colorValue = color.value.trim();

  if (titleValue === "" || authorValue === "") {
    alert("Lutven doldurun !!!");
    return;
  }

  let label;
  if (radioPsychology.checked) {
    label = "Psychology";
  } else if (radioDrama.checked) {
    label = "Drama";
  } else if (radioMotivation.checked) {
    label = "Motivation";
  }

  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = titleValue;
  cell2.innerHTML = authorValue;
  cell3.innerHTML = label;

  row.style.backgroundColor = colorValue;

  title.value = "";
  author.value = "";
  color.value = "";
  radioPsychology.checked = false;
  radioDrama.checked = false;
  radioMotivation.checked = false;
});
