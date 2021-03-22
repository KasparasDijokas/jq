// ********************************************************************
// INDEX() WITH NO ARGUMENTS

var foo = $('#foo1');
// grazina 1 - nes #foo1 indexas yra 1 (antras elementas ul containeryje)
// console.log( "Index: " + foo.index() ); // 1

var listItem = $('li');

// This implicitly calls .first()
// listItem yra jQuery object (kaip node list) kuriame yra li node itemai
// index() siuo atveju randa pirma li itema (ul konteineryje) ir grazina jo index
// console.log( "Index: " + listItem.index() ); // 1
// console.log( "Index: " + listItem.first().index() ); // 1

var div = $('div');

// This implicitly calls .first()
// tas pats kaip ir su li itemais
// console.log( "Index: " + div.index() ); // 0
// console.log( "Index: " + div.first().index() ); // 0

// ********************************************************************
// with a String Argument

// If a selector string is passed as an argument,
// .index() returns an integer indicating the position of the first element
// within the jQuery object relative to the elements matched by the selector.
// If the element is not found, .index() will return -1.

var foo = $('li');

// This implicitly calls .first()
// console.log( "Index: " + foo.index( "li" ) ); // 0
// console.log( "Index: " + foo.first().index( "li" ) ); // 0

var baz = $('#baz1');
// console.log( "baz Index: " + baz.index( "li" )); // 2

var listItem = $('#bar1');
// console.log( "Index: " + listItem.index( ".test" ) ); // 1

var div = $('#last');
// console.log( "Index: " + div.index( "div" ) ); // 2

// susirenku visus checkboxus kurie yra pazymeti
$(() => {
  $('#submit').click(function () {
    const values = $('input:checked');
    for (let i = 0; i < values.length; i++) {
    //   console.log(values[i].value);
    }
  });
});

// tikrinu ar checkbox yra pazymetas
$(() => {
    const inputs = $('input[type="checkbox"]');
    const values = $('input:checked');
  $('#submit').click(function () {
    for (let i = 0; i < values.length; i++) {
        console.log(values[i].is(":checked"));
        if (values[i].is(":checked")) {
        } else {
            console.log('false');
        }
    }
  });

});
