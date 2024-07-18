export function studentInfo(student) {
  return `
    <li class="student-item">
            <div class="student-info">
              <p class="student-id">Id: ${student.id}</p>
              <p class="student-name">Name: ${student.getFullName()}</p>
              <div class="options">
                <button class="btn-option btn-edit" data-student-id=${
                  student.id
                }>
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-option btn-delete" data-student-id=${
                  student.id
                }>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </li>
    `;
}
