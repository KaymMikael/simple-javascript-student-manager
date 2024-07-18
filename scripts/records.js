import { deleteStudent, renderTotalStudent, students } from "./data/student.js";
import { studentInfo } from "./records/studentItem.js";

function renderStudentList() {
  renderTotalStudent();
  let studentListHTML = "";

  students.forEach((student) => {
    studentListHTML += studentInfo(student);
  });

  document.querySelector(".js-student-list").innerHTML = studentListHTML;

  document.querySelectorAll(".btn-edit").forEach((element) => {
    element.addEventListener("click", () => {
      const studentId = element.dataset.studentId;
      window.location.href = `student.html?studentId=${studentId}`;
    });
  });

  document.querySelectorAll(".btn-delete").forEach((element) => {
    element.addEventListener("click", () => {
      const studentId = parseInt(element.dataset.studentId);
      deleteStudent(studentId);
      renderStudentList();
      renderTotalStudent();
    });
  });
}

renderStudentList();
