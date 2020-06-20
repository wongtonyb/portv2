$(document).ready(function () {
  // all custom jQuery will go here

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos && window.innerWidth > 900) {
      $("#navbar").css("box-shadow", "0px 10px 5px 0px rgba(219, 219, 219, 1)");
      $("#navbar").fadeIn(400);
    } else {
      $("#navbar").fadeOut(400);
    }
    prevScrollpos = currentScrollPos;
  };
});
