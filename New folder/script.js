"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize userDatas array if not already in localStorage
  let userDatas = JSON.parse(localStorage.getItem("userDatas")) || [];

  // Handle "Log in" button click on the main page
  const mainLogIn = document.getElementById("log-in");

  if (mainLogIn) {
    mainLogIn.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "Sign in.html"; // Redirect to Sign In page
    });
  }

  // Login and Sign In functionality
  const signInBtn = document.getElementById("signin-btn");
  const rememberMe = document.getElementById("remember-me");
  const logIn = document.getElementById("login-btn");
  const createProjects = document.getElementById("create-project");

  if (createProjects) {
    createProjects.addEventListener("click", function (e) {
      e.preventDefault();

      let username = "someUsername"; // Replace with actual logic to get the username
      let userExists = userDatas.some((user) => user.username === username);

      if (userExists) {
        window.location.href = "Projects.html";
      } else {
        window.location.href = "sign in.html";
      }
    });
  }
  // Fetch existing user data from local storage
  let rememberedUser =
    JSON.parse(localStorage.getItem("rememberedUser")) || null;

  const userInputData = function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = {
      username: username,
      email: email,
      password: password,
    };

    userDatas.push(userData);
    localStorage.setItem("userDatas", JSON.stringify(userDatas));

    // Clear input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    window.location.href = "projects.html";
  };

  if (signInBtn) {
    signInBtn.addEventListener("click", userInputData);
  }

  const inputData = function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if user already exists
    let userExists = userDatas.some(
      (user) => user.username === username && user.password === password
    );

    // If user exists, redirect to Projects.html
    if (userExists) {
      // If "Remember me" is checked, store user data in local storage
      if (rememberMe.checked) {
        localStorage.setItem(
          "rememberedUser",
          JSON.stringify({ username, password })
        );
      } else {
        localStorage.removeItem("rememberedUser");
      }

      window.location.href = "projects.html";
      return;
    } else {
      document.querySelector(".user-not-exist").style.display = "block";
    }
  };

  if (logIn) {
    logIn.addEventListener("click", inputData);
  }

  // Check if remembered user exists and log them in automatically
  if (rememberedUser) {
    let userExists = userDatas.some(
      (user) =>
        user.username === rememberedUser.username &&
        user.password === rememberedUser.password
    );

    if (userExists) {
      window.location.href = "projects.html";
    }
  }
});
//Custom Select Date
document.addEventListener("DOMContentLoaded", (event) => {
  const dateInput = document.getElementById("date");
  const today = new Date()
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .join(".");
  flatpickr(dateInput, {
    dateFormat: "d.m.Y",
    minDate: "01.01.1900",
    maxDate: "31.12.2040",
    defaultDate: today,
    theme: "dark",
    locale: "ru",
  });
});
