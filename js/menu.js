fetch("menu.json").then(r => r.json()).then(items => {
  const ul = document.createElement("ul");
  ul.id = "menu";
  items.forEach(i => { const li = document.createElement("li"); li.textContent = `${i.name} · RM ${i.price}`; ul.append(li); });
  document.querySelector("main").append(ul);
});
