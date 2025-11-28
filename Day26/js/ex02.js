const items = document.querySelectorAll("ul li");
const ul = document.querySelector("ul");

items.forEach((item) => {
  const upBtn = item.querySelector(".up");
  const downBtn = item.querySelector(".down");
  upBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const preEL = item.previousElementSibling;
    if (!preEL) {
      return;
    }
    ul.insertBefore(item, preEL);
  });

  downBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const nextEL = item.nextElementSibling;
    if (!nextEL) {
      return;
    }
    ul.insertBefore(nextEL, item);
  });

  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const selectedEL = ul.querySelector(".selected");
    item.classList.add("selected");
    if (selectedEL) {
      selectedEL.classList.remove("selected");
    }
  });
});
document.addEventListener("click", () => {
  const selectedEL = ul.querySelector(".selected");
  if (selectedEL) {
    selectedEL.classList.remove("selected");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.altKey) {
    if (e.key === "ArrowDown") {
      const selectedEL = ul.querySelector(".selected");
      if (!selectedEL) {
        return;
      }
    }
  }
  if (e.shiftKey && e.altKey) {
    if (e.key === "ArrowUp") {
    }
  }
});
