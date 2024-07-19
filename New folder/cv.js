"use strict";
// Input elements

let userDatas = JSON.parse(localStorage.getItem("userDatas")) || [];

const imgInput = document.getElementById("img-url");
const firstnameInput = document.getElementById("firstname");
const lastnameInput = document.getElementById("lastname");
const jobInput = document.getElementById("job");
const dateInput = document.getElementById("date");
const textInput = document.getElementById("about-me");
const saveBtn = document.getElementById("save");

// Input value holders
const imgInputHolder = document.getElementById("ava");
const nameInputHolder = document.getElementById("full-name");
const jobInputHolder = document.getElementById("for-job");
const dateInputHolder = document.getElementById("full-date");
const textInputHolder = document.getElementById("info");

// Store personal data in local storage
const personalData = JSON.parse(localStorage.getItem("personalData")) || {};

// Update input fields with stored data
if (imgInput) imgInput.value = personalData.imgUrl || "";
if (firstnameInput) firstnameInput.value = personalData.firstName || "";
if (lastnameInput) lastnameInput.value = personalData.lastName || "";
if (jobInput) jobInput.value = personalData.job || "";
if (dateInput) dateInput.value = personalData.date || "";
if (textInput) textInput.value = personalData.aboutMe || "";

// Update holders with stored data
if (imgInputHolder)
  imgInputHolder.style.backgroundImage = `url(${personalData.imgUrl || ""})`;
if (nameInputHolder)
  nameInputHolder.textContent = `${personalData.firstName || ""} ${
    personalData.lastName || ""
  }`;
if (jobInputHolder) jobInputHolder.textContent = personalData.job || "";
if (dateInputHolder) dateInputHolder.textContent = personalData.date || "";
if (textInputHolder) textInputHolder.textContent = personalData.aboutMe || "";

// Event listeners for input fields
if (imgInput) {
  imgInput.addEventListener("input", () => {
    personalData.imgUrl = imgInput.value;
    localStorage.setItem("personalData", JSON.stringify(personalData));
    if (imgInputHolder)
      imgInputHolder.style.backgroundImage = `url(${imgInput.value})`;
  });
}

if (firstnameInput) {
  firstnameInput.addEventListener("input", () => {
    personalData.firstName = firstnameInput.value;
    localStorage.setItem("personalData", JSON.stringify(personalData));
    if (nameInputHolder)
      nameInputHolder.textContent = `${firstnameInput.value} ${
        lastnameInput ? lastnameInput.value : ""
      }`;
  });
}

if (lastnameInput) {
  lastnameInput.addEventListener("input", () => {
    personalData.lastName = lastnameInput.value;
    localStorage.setItem("personalData", JSON.stringify(personalData));
    if (nameInputHolder)
      nameInputHolder.textContent = `${
        firstnameInput ? firstnameInput.value : ""
      } ${lastnameInput.value}`;
  });
}

if (jobInput) {
  jobInput.addEventListener("input", () => {
    personalData.job = jobInput.value;
    localStorage.setItem("personalData", JSON.stringify(personalData));
    if (jobInputHolder) jobInputHolder.textContent = jobInput.value;
  });
}

if (dateInput) {
  dateInput.addEventListener("input", () => {
    personalData.date = dateInput.value;
    localStorage.setItem("personalData", JSON.stringify(personalData));
    if (dateInputHolder) dateInputHolder.textContent = dateInput.value;
  });
}

if (textInput) {
  textInput.addEventListener("input", () => {
    personalData.aboutMe = textInput.value;
    localStorage.setItem("personalData", JSON.stringify(personalData));
    if (textInputHolder) textInputHolder.textContent = textInput.value;
  });
}

// Save Button Functionality
if (saveBtn) {
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Retrieve existing CVs from localStorage
    let allPersonalData =
      JSON.parse(localStorage.getItem("allPersonalData")) || [];

    // Collect new CV data
    const personalData = {};
    if (imgInput) personalData.imgUrl = imgInput.value;
    if (firstnameInput) personalData.firstName = firstnameInput.value;
    if (lastnameInput) personalData.lastName = lastnameInput.value;
    if (jobInput) personalData.job = jobInput.value;
    if (dateInput) personalData.date = dateInput.value;
    if (textInput) personalData.aboutMe = textInput.value;

    // Save new CV data to the array
    allPersonalData.push(personalData);
    localStorage.setItem("allPersonalData", JSON.stringify(allPersonalData));

    // Clear input fields and display fields
    if (imgInput) imgInput.value = "";
    if (firstnameInput) firstnameInput.value = "";
    if (lastnameInput) lastnameInput.value = "";
    if (jobInput) jobInput.value = "";
    if (dateInput) dateInput.value = "";
    if (textInput) textInput.value = "";

    if (imgInputHolder) imgInputHolder.style.backgroundImage = "";
    if (nameInputHolder) nameInputHolder.textContent = "";
    if (jobInputHolder) jobInputHolder.textContent = "";
    if (dateInputHolder) dateInputHolder.textContent = "";
    if (textInputHolder) textInputHolder.textContent = "";

    // Redirect to projects.html
    window.location.href = "projects.html";
  });
}

// Clear input fields on page load

document.addEventListener("DOMContentLoaded", () => {
  if (imgInput) imgInput.value = "";
  if (firstnameInput) firstnameInput.value = "";
  if (lastnameInput) lastnameInput.value = "";
  if (jobInput) jobInput.value = "";
  if (dateInput) dateInput.value = "";
  if (textInput) textInput.value = "";

  if (imgInputHolder) imgInputHolder.style.backgroundImage = "";
  if (nameInputHolder) nameInputHolder.textContent = "";
  if (jobInputHolder) jobInputHolder.textContent = "";
  if (dateInputHolder) dateInputHolder.textContent = "";
  if (textInputHolder) textInputHolder.textContent = "";
});

// Redirect to Create_CV.html when .cv-container button is clicked
const cvContainerBtn = document.querySelector(".cv-container");
cvContainerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "Create_CV.html";
});

// Completed CV functionality
const completedCV = document.querySelector(".completed-cv");
const overlay = document.querySelector(".overlay");

let allPersonalData = JSON.parse(localStorage.getItem("allPersonalData")) || [];

overlay.addEventListener("click", function (e) {
  e.preventDefault();

  completedCV.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Display CVs on projects.html
document.addEventListener("DOMContentLoaded", () => {
  const allCvContainer = document.querySelector(".all-cv");

  allPersonalData.forEach((personalData) => {
    const cvHolder = document.createElement("div");
    const cvHolderImg = document.createElement("div");
    const cvHolderName = document.createElement("h1");

    cvHolder.className = "cv-holder";
    cvHolderImg.className = "cv-holder-img1";
    cvHolderName.className = "cv-holder-name1";

    if (personalData.imgUrl) {
      cvHolderImg.style.backgroundImage = `url(${personalData.imgUrl})`;
    }
    cvHolderName.textContent = `${personalData.firstName} ${personalData.lastName}`;

    cvHolder.appendChild(cvHolderImg);
    cvHolder.appendChild(cvHolderName);
    allCvContainer.appendChild(cvHolder);

    // Add click event to show completed CV
    cvHolder.addEventListener("click", function (e) {
      e.preventDefault();
      completedCV.innerHTML = "";

      completedCV.classList.remove("hidden");
      overlay.classList.remove("hidden");

      const cvImgNameContainer = document.createElement("div");
      const cvHolderJob = document.createElement("p");
      const cvHolderJobName = document.createElement("span");
      const cvHolderDate = document.createElement("p");
      const cvHolderDateName = document.createElement("span");
      const cvHolderAboutMe = document.createElement("p");
      const cvHolderAboutMeName = document.createElement("span");

      cvImgNameContainer.className = "cv-img-name";
      cvHolderImg.className = "cv-holder-img"; // Correct assignment
      cvHolderName.className = "cv-holder-name";
      cvHolderJob.className = "cv-holder-job";
      cvHolderDate.className = "cv-holder-date";
      cvHolderAboutMe.className = "cv-holder-aboutme";

      if (personalData.imgUrl) {
        cvHolderImg.style.backgroundImage = `url(${personalData.imgUrl})`;
      }
      cvHolderJobName.textContent = personalData.job;
      cvHolderName.textContent = `${personalData.firstName} ${personalData.lastName}`;
      cvHolderJob.textContent = "Profession: ";
      cvHolderDateName.textContent = personalData.date;
      cvHolderDate.textContent = "Date of Birth: ";
      cvHolderAboutMeName.textContent = personalData.aboutMe;
      cvHolderAboutMe.textContent = "About Me: ";

      cvHolderJob.appendChild(cvHolderJobName);
      cvHolderDate.appendChild(cvHolderDateName);
      cvHolderAboutMe.appendChild(cvHolderAboutMeName);

      cvImgNameContainer.appendChild(cvHolderImg);
      cvImgNameContainer.appendChild(cvHolderName);

      completedCV.appendChild(cvImgNameContainer);
      completedCV.appendChild(cvHolderJob);
      completedCV.appendChild(cvHolderDate);
      completedCV.appendChild(cvHolderAboutMe);
    });
  });
});

//Log out and Delete Account

const logOutBtn = document.getElementById("log-out");
const deleteAccountBtn = document.getElementById("delete-account");

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
// Delete Account functionality

deleteAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();

  localStorage.clear();

  window.location.href = "index.html";
});
