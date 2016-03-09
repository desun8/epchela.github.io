//******************************************************************************
// Появление формы "Написать нам"
//******************************************************************************
var link = document.querySelector(".btn-popup ");
var write_us = document.querySelector(".pop-up");
var write_us_close = write_us.querySelector(".btn-cancel");

//******************************************************************************
// Появление уведомления о добавлении товара в корзину
//******************************************************************************
var link_1 = document.querySelectorAll(".btn-buy");
var pop_cart = document.querySelector(".pop-cart");
var pop_cart_close = pop_cart.querySelector(".pop-btn--close");

//******************************************************************************
// Скрытие/показ фильтров каталога
//******************************************************************************
// FIXME
// Если возможно, сделать общими переменные
//******************************************************************************
// NOTE
// Для каждого элемента (всего их 3 на блок фильтра) своя переменная
//******************************************************************************
var arrow_up_1 = document.querySelector("#js-arrow-up_1");
var arrow_down_1 = document.querySelector("#js-arrow-down_1");
var filter_1 = document.querySelector(".js-filter-1");
var arrow_up_2 = document.querySelector("#js-arrow-up_2");
var arrow_down_2 = document.querySelector("#js-arrow-down_2");
var filter_2 = document.querySelector(".js-filter-2");
var arrow_up_3 = document.querySelector("#js-arrow-up_3");
var arrow_down_3 = document.querySelector("#js-arrow-down_3");
var filter_3 = document.querySelector(".js-filter-3");

link.addEventListener("click", function(event) {
  event.preventDefault();
  write_us.classList.add("js-pop-up-show");
});

write_us_close.addEventListener("click", function(event) {
  event.preventDefault();
  write_us.classList.remove("js-pop-up-show");
});

for (var i = 0; i < link_1.length; i++) {
  link_1[i].addEventListener("click", function(event) {
    event.preventDefault();
    pop_cart.classList.add("js-pop-cart-show");
    console.log("click me");
  });
}

pop_cart_close.addEventListener("click", function(event) {
  event.preventDefault();
  pop_cart.classList.remove("js-pop-cart-show");
});

arrow_up_1.addEventListener("click", function(event) {
  event.preventDefault();
  filter_1.classList.add("js-filter--hide", "js-filter-animation");
  arrow_down_1.classList.add("js-arrow--show");
  arrow_up_1.classList.add("js-arrow--hide");
  console.log("скрытие первой стрелки");
});

arrow_down_1.addEventListener("click", function(event) {
  event.preventDefault();
  filter_1.classList.remove("js-filter--hide");
  arrow_down_1.classList.remove("js-arrow--show");
  arrow_up_1.classList.remove("js-arrow--hide");
  console.log("show первой стрелки");
});

arrow_up_2.addEventListener("click", function(event) {
  event.preventDefault();
  filter_2.classList.add("js-filter--hide", "js-filter-animation");
  arrow_down_2.classList.add("js-arrow--show");
  arrow_up_2.classList.add("js-arrow--hide");
  console.log("скрытие первой стрелки");
});

arrow_down_2.addEventListener("click", function(event) {
  event.preventDefault();
  filter_2.classList.remove("js-filter--hide");
  arrow_down_2.classList.remove("js-arrow--show");
  arrow_up_2.classList.remove("js-arrow--hide");
  console.log("show первой стрелки");
});

arrow_up_3.addEventListener("click", function(event) {
  event.preventDefault();
  filter_3.classList.add("js-filter--hide", "js-filter-animation");
  arrow_down_3.classList.add("js-arrow--show");
  arrow_up_3.classList.add("js-arrow--hide");
  console.log("скрытие первой стрелки");
});

arrow_down_3.addEventListener("click", function(event) {
  event.preventDefault();
  filter_3.classList.remove("js-filter--hide");
  arrow_down_3.classList.remove("js-arrow--show");
  arrow_up_3.classList.remove("js-arrow--hide");
  console.log("show первой стрелки");
});
