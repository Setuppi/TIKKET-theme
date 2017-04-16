$( ".mobile-trigger" ).click(function() {
  $( ".mobile-trigger" ).toggleClass ('mobile-open');
  $( ".mobile-wrapper" ).slideToggle(300);
  $( ".main-wrapper" ).toggleClass('open');
});
