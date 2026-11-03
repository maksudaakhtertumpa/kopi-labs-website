const form = document.getElementById("booking");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (new Date(data.date) < new Date().setHours(0, 0, 0, 0)) return alert("Please pick a future date.");
  fetch("/api/bookings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    .then(() => form.replaceWith("Thanks! We'll confirm by email."));
});
