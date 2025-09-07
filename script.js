function showMessage() {
  alert("Thank you for visiting my UG Education Portfolio!");
}

function toggleProject(projectElement) {
  const details = projectElement.querySelector(".details");
  details.style.display = (details.style.display === "block") ? "none" : "block";
}