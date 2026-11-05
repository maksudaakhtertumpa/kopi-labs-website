const hours = { weekday: "7:30–18:00", weekend: "8:00–20:00" };
document.querySelector("main").insertAdjacentHTML("beforeend",
  `<p class="hours">Open weekdays ${hours.weekday}, weekends ${hours.weekend}</p>`);
