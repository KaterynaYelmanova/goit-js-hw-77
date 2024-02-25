const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //console.log(event.currentTarget.elements);
  const elements = event.currentTarget.elements;
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  // Check if any form field is empty
  if (info.email === "" || info.password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(info);

  event.currentTarget.reset();
}
