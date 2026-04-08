const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
form.elements.email.value = savedData.email ?? "";
form.elements.message.value = savedData.message ?? "";
}

form.addEventListener("input", () => {
const formData = {
email: form.elements.email.value.trim(),
message: form.elements.message.value.trim(),
};
localStorage.setItem(localStorageKey, JSON.stringify(formData));
});