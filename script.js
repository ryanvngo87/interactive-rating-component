const ratingContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgainButton = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  ratingContainer.style.display = "none";
});

rateAgainButton.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  ratingContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
