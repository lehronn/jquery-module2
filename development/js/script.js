// scripts.js

//waiting for DOM objects.
$(function() {
  console.log('js file is started and DOMs objects is loaded.');
  //end waiting

  //change color with css metod
  var spans = $('span');
  spans.each(function(index, element) {
    if (index % 2 == 0) {
      $(element).css('color', 'red');
    }
  });

  var paragraphs = $('p');
  paragraphs.each(function(index, element) {
    var btn = '<button class="btn" data-tmp="' + index + '">Click me</button>';
    $(element).append(btn);
  });

  $('button').click(function(){
    alert($(this).attr("data-tmp"));
  });

});
