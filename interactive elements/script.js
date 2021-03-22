$(document).ready(function () {
  // single click event
  let counter = 0;
  $('.highlight').click(function () {
    counter++;
    $(this).text('clicked' + ' ' + counter);
  });

  // double click event
  $('.highlight').dblclick(function () {
    $(this).text('double click');
  });

  // hover
  $('.highlight').hover(function () {
    $(this).text('hover over me');
  });

  // mouse down
  $('.highlight').mousedown(function () {
    $(this).text('mouse down');
  });

  // mouse up
  $('.highlight').mouseup(function () {
    $(this).text('mouse up');
  });

  // mouse enter
  $('.highlight').mouseenter(function () {
    $(this).text('hover over me');
  });

  // mouse leave
  $('.highlight').mouseleave(function () {
    $(this).text('mouse leave');
  });

  // mouse move
  $('.highlight').mousemove(function () {
    $(this).text('mouse move');
  });
});

// keyboard events
$(() => {
  // focus
  $('input').focus(function () {
    $(this).css('background-color', 'yellow');
  });

  // blur (kai focus pasibaigia)
  $('input').blur(function () {
    $(this).css('background-color', 'initial');
  });

  // focus out (panasiai kaip blur)
  $('input').focusout(function () {
    $(this).css('background-color', 'initial');
  });

  // keypress
  let newText = '';
  $('input').keypress(function (e) {
    newText += e.key;
    $('.highlight').text(newText);
  });

  // key down and up
  $('input').keydown(function (e) {
    $(this).css('color', 'red');
  });

  $('input').keyup(function (e) {
    $(this).css('color', 'blue');
  });


  // onchange
  $('.select').change(function() {
    $('body').css('background-color', $(this).val())
  })
});

// browser events

$(() => {
    // resize
    $(window).resize(function() {
        console.log($(window).width());
    })

    // scroll
    $(window).scroll(function() {
        console.log('scrolling');
    })
})
