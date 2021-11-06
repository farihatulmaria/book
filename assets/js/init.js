(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".product-menu li a").on("click", function () {
      var selector = $(this).attr("data-filler");

      $(".product-list").isotope({
        filter: selector,
      });
    });
    $(".product-list").isotope({});
  });
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
})(jQuery);
