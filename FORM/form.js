document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name cannot be empty";
      isValid = false;
    }

    const age = parseInt(document.getElementById("age").value.trim());
    if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById("ageError").textContent =
        "Age must be a number between 18 and 100";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
