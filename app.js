var box = document.getElementById("box");
var clickCount = document.getElementById("count-clicks");
var btn = document.getElementById("btn");
var count = 0;
box.addEventListener("click", function () {
  count++;
  // console.log(count);
  clickCount.innerText = count + " ";
});

btn.addEventListener("click", function () {
  count = 0;
  // console.log(count);
  clickCount.innerText = count + " ";
});
