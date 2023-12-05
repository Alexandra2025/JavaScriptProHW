const product = document.querySelector(".product");
const review = document.querySelector(".review");
const btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click", () => {
  if (product.value == "" || review.value == "") {
    alert("Вы не ввели данные!");
  } else {
    localStorage.setItem(product.value, review.value);
  }
});
