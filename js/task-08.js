const myForm = document.querySelector("form.login-form");

myForm.addEventListener("submit", myFun);

function myFun(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
    return;
  }
  const user = { email: email.value, password: password.value };
  console.log(user);
  event.currentTarget.reset();
}
