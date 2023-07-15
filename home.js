bar = document.querySelector(".bar");
bar.onclick = function () {
  nav = document.querySelector("nav");
  nav.classList.toggle("active");
};
// $('.click a').click(function () {
//   $(this).addClass("focus").siblings().removeClass("focus");
// });
var menu = document.getElementById("menu");
menu.addEventListener("click", function (event) {
  // Remove the "clicked" class from all menu items
  var menuItems = document.querySelectorAll("#menu li");
  menuItems.forEach(function (item) {
    item.classList.remove("clicked");
  });

  // Add the "clicked" class to the clicked menu item
  if (event.target.tagName === "LI") {
    event.target.classList.add("clicked");
  }
});
var typingEffect = new Typed(".multitext", {
  strings: [
    "Front-end Developer",
    "Digital Marketer",
    "Tech Support",
    "Web 3 Lover",
    "No-code Developer",
  ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDealay: 1500,
});
