document.addEventListener("DOMContentLoaded"), () => {
  const coin = document.querySelector(".coin");
  const brandName = document.querySelector(".brand-name");

  coin.addEventListener("animationend", () => {
    brandName.style.opacity = 1;
  })}