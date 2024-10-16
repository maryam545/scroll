document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    window.scroll({
      top: target.offsetTop - 50, // Adjust for fixed nav height
      behavior: "smooth",
    });
  });
});
