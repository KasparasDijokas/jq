$(() => {
  $('#submitBtn').click(function () {
    // siu atveju grazina tik pirma rasta checkbox
    const checkedButtons = $('input:checked');
    console.log(checkedButtons);
    // jei noriu pamatyti visus tai turiu loopinti per array
    const checkedValues = checkedButtons.map(function() {
        return $(this).val();
    })

    console.log(loop);
  });

  // patikrinu ar bent vienas checkbox yra pasirinktas
  $('form').submit(function (e) {
    e.preventDefault();
    if ($('input:checked').length > 0) {
      $('form').css('background-color', 'blue');
    } else {
      $('form').css('background-color', 'red');
    }
  });

  $('#firstButton').click(function() {
      const firstName = $('input[name="first"]').val()
      const lastName = $('input[name="last"]').val()

      $('h1').text(firstName + ' ' + lastName)

  })
});
