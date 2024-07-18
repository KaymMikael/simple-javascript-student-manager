import { getStudentById, Student, updateStudent } from "./data/student.js";
import { showMessage } from "./utils/errorMessage.js";
import { toTitleCase, validateAndFocus } from "./utils/input.js";

const url = new URL(window.location.href);
const id = parseInt(url.searchParams.get("studentId")); //Get the student Id from the url
const student = getStudentById(id);
const {firstName, lastName, age, address } = student;
const inputs = [
  document.querySelector(".firstName"),
  document.querySelector(".lastName"),
  document.querySelector(".age"),
  document.querySelector(".address"),
];

function loadStudent() {
  document.querySelector(".student-id").innerHTML = `Id: ${id}`;
  inputs[0].value = firstName;
  inputs[1].value = lastName;
  inputs[2].value = age;
  inputs[3].value = address;
}

loadStudent();

document.querySelector(".btn-save").addEventListener("click", () => {
  if (validateAndFocus(inputs)) {
    showMessage();
    return;
  }
  const firstName = inputs[0].value;
  const lastName = inputs[1].value;
  const age = inputs[2].value;
  const address = toTitleCase(inputs[3].value);

  const studentDetails = {
    id:id,
    firstName:firstName,
    lastName:lastName,
    age:age,
    address:address
  }

  const updatedStudent = new Student(studentDetails);
  updateStudent(id, updatedStudent);
  alert("Updated");
  window.location.href = 'records.html';
});
