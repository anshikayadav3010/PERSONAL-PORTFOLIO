// Typing effect
const name = "Anshika Yadav";
let i = 0;
function type() {
  if (i < name.length) {
    document.getElementById("typed-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Greeting based on time
const hour = new Date().getHours();
let greet = "Hello";
if (hour < 12) greet = "Good Morning ☀️";
else if (hour < 18) greet = "Good Afternoon 🌤️";
else greet = "Good Evening 🌙";
document.getElementById("greeting").innerText = greet;

// Dark mode
function toggleMode() {
  document.body.classList.toggle("dark");
}

// Reveal sections
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
