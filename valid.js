document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Name validation
    if (name === "") {
      isValid = false;
      document.getElementById("nameError").innerText = "Name is required.";
    } else {
      document.getElementById("nameError").innerText = "";
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      isValid = false;
      document.getElementById("emailError").innerText = "Enter a valid email.";
    } else {
      document.getElementById("emailError").innerText = "";
    }
// Password validation
if (password.length < 6) {
      isValid = false;
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });

  // To-Do List Logic
  function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (task === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.className = "todo-item";
    taskDiv.innerHTML = `
      <span>${task}</span>
      <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("todoList").appendChild(taskDiv);
    input.value = "";
  }
  document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Name validation
    if (name === "") {
      isValid = false;
      document.getElementById("nameError").innerText = "Name is required.";
    } else {
      document.getElementById("nameError").innerText = "";
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      isValid = false;
      document.getElementById("emailError").innerText = "Enter a valid email.";
    } else {
      document.getElementById("emailError").innerText = "";
    }
// Password validation
if (password.length < 6) {
      isValid = false;
      document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });

  // To-Do List Logic
  function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
    if (task === "") return;

    const taskDiv = document.createElement("div");
    taskDiv.className = "todo-item";
    taskDiv.innerHTML = `
      <span>${task}</span>
      <button onclick="this.parentElement.remove()">remove</button>
    `;

    document.getElementById("todoList").appendChild(taskDiv);
    input.value = "";
  }
