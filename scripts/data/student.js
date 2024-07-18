//Student blueprint
export class Student {
  id;
  firstName;
  lastName;
  age;
  address;

  constructor(studentDetails) {
    this.id = studentDetails.id;
    this.firstName = studentDetails.firstName;
    this.lastName = studentDetails.lastName;
    this.age = studentDetails.age;
    this.address = studentDetails.address;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Safely parse students from localStorage
const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

export let students = storedStudents.map((student) => new Student(student));

function saveToStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

export function addStudent(firstName, lastName, age, address) {
  const id = students.length + 1;
  const studentDetails = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: address,
  };
  students.push(new Student(studentDetails));
  saveToStorage();
}

export const deleteStudent = (id) => {
  students = students.filter((student) => student.id !== id);
  saveToStorage();
};

export const updateStudent = (id, updatedStudent) => {
  let student = getStudentById(id);
  student.firstName = updatedStudent.firstName;
  student.lastName = updatedStudent.lastName;
  student.age = updatedStudent.age;
  student.address = updatedStudent.address;
  saveToStorage();
};

function getTotalStudents() {
  return students.length;
}

export const renderTotalStudent = () => {
  document.querySelector(
    ".js-student-number"
  ).innerHTML = `Students: ${getTotalStudents()}`;
};

export const getStudentById = (id) => {
  let matchingStudent;
  matchingStudent = students.find((student) =>
    student.id === id ? student : undefined
  );
  return matchingStudent;
};
