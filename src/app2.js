import $ from "jquery";
import "./app2.css";

const $bar = $(".bar");
const $content = $(".content");

$bar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  const index = $li.index();
  console.log(index);
  $content
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
