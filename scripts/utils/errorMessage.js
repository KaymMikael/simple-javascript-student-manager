export function showMessage() {
    let timeoutId;
    const errorMessage = document.querySelector(".error-message");
    if (!errorMessage.classList.contains("show-error")) {
      clearTimeout(timeoutId);
      errorMessage.classList.add("show-error");
      timeoutId = setTimeout(() => {
        errorMessage.classList.remove("show-error");
      }, 2000);
    }
}