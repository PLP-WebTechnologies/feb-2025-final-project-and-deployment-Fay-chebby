// Toggle Dark Mode
const toggleBtn = document.querySelector(".theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? ""
    : "";
});

// Handle form submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const subject = form
    .querySelector("input[placeholder='Subject']")
    .value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Simulate sending
  console.log("Message Sent:");
  console.log({ name, email, subject, message });

  alert("Thank you! Your message has been sent.");

  form.reset(); // Clear the form
});
