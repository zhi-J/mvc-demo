import "./app1.css";
import $ from "jquery";

const $button1 = $(".add1");
const $button2 = $(".minus1");
const $button3 = $(".mul2");
const $button4 = $(".divide2");
const $num = $(".num");
const n = localStorage.getItem("n");
$num.text(n || 100);

$button1.on("click", () => {
  let num = parseInt($num.text());
  num += 1;
  localStorage.setItem("n", num);
  $num.text(num);
});
$button2.on("click", () => {
  let num = parseInt($num.text());
  num -= 1;
  localStorage.setItem("n", num);

  $num.text(num);
});
$button3.on("click", () => {
  let num = parseInt($num.text());
  num *= 2;
  localStorage.setItem("n", num);

  $num.text(num);
});
$button4.on("click", () => {
  let num = parseInt($num.text());
  num /= 2;
  localStorage.setItem("n", num);

  $num.text(num);
});
