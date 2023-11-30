// Get references to the sections
const section1 = document.getElementById("welcomePage");
const section2 = document.getElementById("header");

// Function to hide section1 and show section2 after a delay
function autoScroll() {
  //section1.style.display = 'none';
  section2.style.display = "flex";

  // Scroll to the top of section2
  window.scrollTo({
    top: section2.offsetTop,
    behavior: "smooth",
  });
}

setTimeout(autoScroll, 3000); // 3000 milliseconds = 3 seconds

//this is for the refresh to start over
window.onload = function () {
  // Scroll to the top of section1
  window.scrollTo({
    top: section1.offsetTop,
    behavior: "smooth",
  });
};
