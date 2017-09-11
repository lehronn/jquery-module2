// scripts.js

//waiting for DOM objects.
$(function() {
  console.log('js file is started and DOMs objects is loaded.');
  //end waiting

  var carouselList = $("#carousel ul");

  var changeSlide = function() {
  setInterval(changeSlide, 3000);
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
};

  var moveFirstSlide = function() {
    var firstItem = carouselList.find("li:first"),
        lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
  changeSlide();
});
