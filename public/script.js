$(document).ready(function() {
  // all custom jQuery will go here

  // hide .navbar first
  $("#nav").hide();
  $("#menubar").hide();

  // fade in .navbar
  $(function() {
    $(window).scroll(function() {
      // set distance user needs to scroll before we start fadeIn
      var homevh = $("#home").height(); // == 100vh
      if ($(this).scrollTop() >= homevh - 50) {
        $("#nav, #menubar").fadeIn(200);
      } else {
        $("#nav, #menubar").fadeOut(200);
      }
    });
  });

  // hide #menu
  $("#menu").hide();

  $(".comp").toggleClass("has-overlay");

  // menu toggle
  $(function() {
    $("#menubar").click(function() {
      $("#menu").show(200, () => $(".comp").toggleClass("has-overlay"));
    });
  });

  //hide menu
  $(function() {
    $(".fa-times, .comp, .menu-links").click(function() {
      $("#menu").hide(200, () => $(".comp").removeClass("has-overlay"));
    });
  });
});
