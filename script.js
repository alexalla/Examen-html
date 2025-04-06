const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professionel");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "42.69 $" ? "512.28 $" : "42.69 $";
  professional.textContent =
    professional.textContent === "4269 $" ? "51 228 $" : "4269 $";
  master.textContent =
    master.textContent === "4269 M" ? "51 228 M" : "51 228 M";
});
