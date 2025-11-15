const myName = "Kiran Naikwadi";
const mySkills = "Java, Spring Boot, MySQL, JavaScript";
const myEmail = "kirann@gmail.com";
const myPhone = "9876543210";

document.getElementById("nameDisplay").textContent = myName;
document.getElementById("skillDisplay").textContent = mySkills;

document.getElementById("goSkills").onclick = function () {
    document.getElementById("skillsSection").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("emailBtn").onclick = function () {
    window.location.href = "mailto:" + myEmail;
};

document.getElementById("phoneBtn").onclick = function () {
    window.location.href = "tel:" + myPhone;
};

document.getElementById("profileImg").onclick = function () {
    this.classList.toggle("zoom");
};
