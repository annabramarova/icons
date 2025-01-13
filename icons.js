document.querySelectorAll(".card").forEach((card) => {
  const circleGroup = card.querySelector(".circle-group");
  const man1 = card.querySelector(".man1");
  const man2 = card.querySelector(".man2");

  card.addEventListener("mouseenter", () => {
    // Включаем анимацию и изменения при наведении
    circleGroup.style.transform = "rotate(400deg)";
    man1.style.opacity = 0;
    man2.style.opacity = 1;
  });

  card.addEventListener("mouseleave", () => {
    // Восстанавливаем исходные значения при уходе с элемента
    circleGroup.style.transform = "rotate(0deg)";
    man1.style.opacity = 1;
    man2.style.opacity = 0;
  });
});
