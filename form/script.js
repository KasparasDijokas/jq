$(() => {
  $('button').click(() => {
    validateMe();
  });

  function validateMe() {
    const error = [];
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    $('label').css('color', 'black');

    $('#myForm input').each(function () {
      const inputName = $(this).attr('name');
      const inputValue = $(this).val();

      // check input length
      if (inputValue.length < 4 && inputName !== 'email') {
        error.push(inputName);
      }

      // check email
      if (inputName === 'email' && !emailReg.test(inputValue)) {
        error.push(inputName);
      }
    });

    // jeigu error array yra tuscias tuomet submitinu forma
    // jei ne tuomet loopinu per erro array ir uzdedu css ant label kurio inputas turi error
    if (error.length == 0) {
      // jQuery method for submitting form
      $('#myForm').submit();
    } else {
      for (let i = 0; i < error.length; i++) {
        $(`label[for="${error[i]}"]`).css('color', 'red');
      }
      console.log(error);
    }
  }
});
