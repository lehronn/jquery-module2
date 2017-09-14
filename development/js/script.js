// scripts.js

//waiting for DOM objects.
$(function() {
  console.log('js file is started and DOMs objects is loaded.');
  //end waiting

  var carouselList = $("#carousel ul");

  var imgs = $("#carousel img");
  console.log(imgs);

  var kropka = $("body").append('<div class="carousel-counter"></div>');
  console.log(kropka);

  var countersDiv = $("#carousel-counter div"); console.log(imgs);

  $(imgs).each(function( index, elem ) {
    $(kropka).append('<i class="fa fa-circle-o" aria-hidden="true">'); //dodaje kropke
  });

  var changeSlide = function() {
    setTimeout(changeSlide, 3000);
    carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
};
  var moveFirstSlide = function() {
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
  changeSlide();

  var leftArrow = $( ".fa-arrow-left" ),
      rightArrow = $( ".fa-arrow-right" );
  $(leftArrow).click(function() {
    carouselList.animate({'marginLeft':400}, 500, moveFirstSlide);
  });
  $(rightArrow).click(function() {
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }
);
for (var i = 0; i<= carouselList; i++) {
  $('<i class="fa fa-circle" aria-hidden="true"></i>');
}
});
