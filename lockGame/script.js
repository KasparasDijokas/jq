$(document).ready(function () {
  // 1. pradzioje paslepiam output message
  // sukuriam secretNumber
  $('#output').hide();
  let secretNumber = '';

  $('input[type="number"]').css({
    color: 'white',
    fontSize: '3em',
    width: '60px',
    border: '1px solid black',
    backgroundColor: 'black',
  });

  $('.btn').css({
    backgroundColor: 'black',
    color: 'white',
    width: '160px',
    fontSize: '1.5em',
    padding: '15px',
    margin: '25px auto 0px',
    border: '1px solid black',
    textAlign: 'center',
  });

  $('#output').css({
    backgroundColor: '#333',
    width: '300px',
    padding: '15px',
    border: '1px solid black',
    textAlign: 'center',
  });

  $('small').css({
    color: 'white',
    fontSize: '1em',
    padding: '15px',
    marginBottom: '15px',
    textAlign: 'center',
    display: 'block',
  });

  // 2. pridedu click listener ant start btn
  // priddedu openLock ant checkLock btn
  $('#startBtn').click(startGame);
  $('#checkLock').click(openLock);

  // 3. startGame funkcija
  function startGame() {
    $('#startBtn').hide();
    $('#output').show();
    secretNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
    console.log(secretNumber);
    
    // loopinu per visus input (type number)
    // kiekvienam i hardcodinu value 5
    for (let i = 0; i < $('input[type="number"]').length; i++) {
      $('input[type="number"]').eq(i).val('5');
    }

    $('small').html(
      'red background guess is low, blue background guess is high'
    );
  }

  // 4. openLock funkcija
  function openLock() {
    let win = 0;
    for (let i = 0; i < $('input[type="number"]').length; i++) {
      let guessNumber = $('input[type="number"]').eq(i);
      const result = checkNumber(guessNumber.val(), secretNumber[i]);
      guessNumber.css({
        backgroundColor: result.backgrd,
      });
      if (result.checker) {
        win++;
      }
    }
    if (win === 3) {
      $('#startBtn').show();
      $('small').html('You got it ' + secretNumber);
    }
  }

  function checkNumber(a, b) {
    let response = {};
    if (a < b) {
      response.checker = false;
      response.backgrd = 'red';
    }
    if (a > b) {
      response.checker = false;
      response.backgrd = 'blue';
    }
    if (a == b) {
      response.checker = true;
      response.backgrd = 'green';
    }
    return response;
  }
});
