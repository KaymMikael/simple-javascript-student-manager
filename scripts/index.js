import { validateAndFocus, toTitleCase } from "./utils/input.js";
import { showMessage } from "./utils/errorMessage.js";
import { addStudent, renderTotalStudent } from "./data/student.js";

document.querySelector(".btn-add").addEventListener("click", () => {
  const inputs = [
    document.querySelector(".firstName"),
    document.querySelector(".lastName"),
    document.querySelector(".age"),
    document.querySelector(".address"),
  ];

  if (validateAndFocus(inputs)) {
    showMessage();
    return;
  }
  
  const firstName = toTitleCase(inputs[0].value);
  const lastName = toTitleCase(inputs[1].value);
  const age = inputs[2].value;
  const address = toTitleCase(inputs[3].value);
  addStudent(firstName, lastName, age, address);

  inputs.forEach((input) => (input.value = ""));

  renderTotalStudent();
});

renderTotalStudent();
