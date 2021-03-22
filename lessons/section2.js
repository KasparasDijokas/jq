$(document).ready(function () {
  console.log('document is ready');
});

$(() => {
  // paslepia html elementa
  $('h1').hide();
  // vel pradeda rodyti html elementa
  $('h1').show();
});


// Lesson 10
// TEKSTO PAKEITIMAS (innerHTML)

const paragraph = document.getElementById('text');
paragraph.innerHTML = 'vanilla js';

$(() => {
  // pakeicia html elemento teksta (innerHTML)
  $('p').html('jquery change text');
});
