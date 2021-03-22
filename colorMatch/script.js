$(document).ready(function () {
  const colorArray = [];
  $('#gameArea').hide();
  $('#start').click(startGame);
  // .cell dar nera sukurtas del to jquery negali uzdeti click listener ant jo
  // uzdedu click and #output, .cell (jis sukurtas html faile)
  $('#output').on('click', '.cell', checkCell);

  function startGame() {
    $('#start').hide();
    $('#gameArea').show();
    makeBoard();
    pickMyColor();
  }

  function makeBoard() {
    let i = 4;
    let html = '';
    for (let row = 0; row < i; row++) {
      html += '<div class="row">';
      for (let col = 0; col < i; col++) {
        html +=
          '<div class="cell" style="background-color:' +
          addNewColor() +
          '">0</div>';
      }
      html += '</div>';
    }
    $('#output').html(html);
  }

  function pickMyColor() {
    const index = Math.floor(Math.random() * colorArray.length);
    const pickedColor = colorArray.splice(index, 1);
    $('#findMe').css('background-color', pickedColor);
  }

  function checkCell() {
    const currentColor = $(this).css('background-color');
    if (currentColor == $('#findMe').css('background-color')) {
      let countValue = Number($(this).text());
      countValue++;
      $(this).text(countValue);
      // jeigu cell teisingas (parinkta teisinga spalva) tai tam cell sukuriam nauja spalva
      $(this).css('backgroundColor', addNewColor());
      pickMyColor();
      $('#message').html('correct');
    } else {
      $('#message').html('wrong color');
    }
  }

  function addNewColor() {
    const color = randomColor();
    colorArray.push(color);
    return color;
  }

  function randomColor() {
    // return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    red = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    const rgb = `rgb(${red}, ${blue}, ${green})`;
    return rgb;
  }
});
