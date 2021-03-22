// 12. IMAGES AND ATTRIBUTES
$(() => {
  // acces img attributes
  console.log($('img').attr('alt'));
  console.log($('img').attr('title'));
  console.log($('img').attr('height'));

  console.log($('#section3__paragraph').attr('title'));
  // update paragraph attribute (title)
  console.log($('#section3__paragraph').attr('title', 'update'));

  // to update more than 1 attribute use json format
  // updates all img src and alt attributes
  $('img').attr({
    src: 'https://via.placeholder.com/50x50',
    alt: 'New alt',
    height: '120px',
  });
});

// *********************************************************************************************************

// 15. Selectors and updating multiple items

$(() => {
  // panaudoju funkcija kuri grazina nauja src
  $('img').attr({
    src: function (e) {
      console.log(e);
      return `https://via.placeholder.com/125x125?text=${e + 1}`;
    },
  });

  // jeigu noriu targetinti atskirai pagal id (targetinu kaip css)
  $('#img1').attr('src', `https://via.placeholder.com/125x125?text=by id`);
  $('#img2').attr(
    'src',
    `https://via.placeholder.com/125x125?text=by id again`
  );

  // arba pasirenku visus elementus kurie turi class 'list'
  $('.list').html('update');
});

// *********************************************************************************************************

// 16. Form elements selection

$(() => {
  // pasirenku visus checkboxes su type 'checkbox'. targetinu situs elementus taip pat kaip daryciau css
  const checkboxes = $('input[type=checkbox]');
});

// *********************************************************************************************************

// 18. Selection by order jQuery

$(() => {
  // visiems list items pridedu color: red
  $('.list').css('color', 'red');

  // dabar noriu is list itemu pakeisti tik tam tikra:
  $('.list:first').html('first item');
  $('.list:last').html('last item');
  $('.list:even').html('even item');
  $('.list:odd').html('odd item');
});

// *********************************************************************************************************

// 20. More Selection

$(() => {
  // targetinu konkretu elementa (prideda style attribute)
  $('.list:eq(2)').css('color', 'green');
  // dar vienas budas
  $('.list:nth-child(2)').css('color', 'blue');

  // jeigu naudoju 'eq' tai itemai prasideda nuo 0
  // jei naudoju nth-child itemai prasideda nuo 1
  $('.item:eq(0)').css('color', 'gray');
  $('.item:nth-child(1)').css('color', 'green');

  // jeigu noriu loopinti per visus
  const allItems = $('.item');
  for (let i = 0; i < allItems.length; i++) {
    $(`.item:eq(${i})`).html(i);
  }
  // arba
  for (let i = 0; i < $('.item').length; i++) {
    $(`.item:eq(${i})`).html(i);
  }

  // jeigu noriu kad visi list itemai didesni nei 2 turetu tam tikra stiliu - gt
  $('.item:gt(2)').css('color', 'red')
  // less than  - lt
  $('.item:lt(2)').css('color', 'blue')
});


// *********************************************************************************************************

// 22. Multiple element selection

$(() => {
    $('.multiple, .text').html('multiple')
})


// *********************************************************************************************************
// 24. jQuery Making it interactive

$(() => {
    $('.clickable').click(function () {
        console.log($(this));
    })

    $('img').on('click', function () {
        console.log('longer click version');
    })
})

// *********************************************************************************************************
// 26. Selection filtering and fine tuning

$(() => {
  // visiems listItem uzdedu click listener
  // kai paspaudziu tada suveikia filter ir tik tiem listItem kurie turi class filtered uzdedu css
  $('.listItem').click(() => {
    $('.listItem').filter('.filtered').css('color', 'red')
  })

  // naudodamas 'this' pasikeis tik ant paspausto listItem css jei jis turi class filtered
  $('.listItem').click(function () {
    $(this).filter('.filtered').css('color', 'red')
  })

  // dabar paspaudziu ant paragraph ir pirmas li itemas gauna css
  $('p').click(() => {
    $('.listItem').first().css('color', 'blue')
  })

    // dabar paspaudziu ant paragraph ir jei listItem turi savyje span tai tam span pritaikom css
    $('p').click(() => {
      $('.listItem').has('span').css('color', 'green')
    })
})


// *********************************************************************************************************
// 28. jQuery advanced filtering 

$(() => {
  // mapinu per visus list itemus ir grazinu ju html
  // grazines juos galiu kazka su jais daryto
  $('.btn').click(() => {
    const elements = $('.anotherItem').map(function () {
      return $(this).html()
    })

    // naudoju slice ir pridedu css pasirinktiems itemams
    $('.anotherItem').slice(2, 4).css('color', 'blue')
  })
})

// *********************************************************************************************************
// 30. Introduction to traversing

$(() => {
  // paspaudus ant button pasirenku visus p (traversingParagraph) children (2 span elementus)
  $('.button').click(() => {
    const children = $('.traversingParagraph').children();
    console.log(children);
  })

  // dabar pasirenku parent
  const parent = $('span').parent();
  // arba pasirenku parent naudodamas this
   $('span').click(function () {
    console.log($(this).parent());
  })
})

// *********************************************************************************************************
// 32. jQuery traverse the elements

$(() => {
  // closest() suranda artimiausia elementa kuris turi attr 'title' (eina i virsu - i parent)
  // jei neranda - tuomet undefined
  $('span').click(function () {
    const closest = $(this).closest('ul').attr('title');
    console.log(closest);

    // dabar kai paspaudziu ant span tai kitas span kuris yra tame paciame parent pakeicia spalva
    // jei tame paciame parent kito span nera tai nieko neatsitinka
    $(this).next().css('color', 'blue')
    // tokia pati logika su previous
    $(this).prev().css('color', 'green')
  })

  // dabar ta pati padarau su list itemais. jie turi prev (isskyrus pirma) ir turi next (isskyrus paskutini)
  $('.itemas').click(function() {
    $(this).next().css('color', 'blue')
    $(this).prev().css('color', 'green')

    // dabar pasirenku nextAll ir prevAll
    $(this).nextAll().text('im next')
    $(this).prevAll().text('im previous')
  })

  // paspaudziu ant item ir jei jame yra span tai pakeicia jo text (pritaiko visiems span)
  $('.itemas').click(function() {
    $(this).find('span').text('im span')
  })

})


// *********************************************************************************************************
// 32. Element siblings

$(() => {
  // su siblings() parenka tik tame paciame parent elemente esancius narius
  $('span').click(function () {
    $(this).siblings().text('im a sibling')
  })
})

