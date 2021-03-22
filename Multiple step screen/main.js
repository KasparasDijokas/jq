// main.html antras budas
$(() => {
    $('.hiddenStep').css('display', 'none');
    $('a').click(function(e) {
        e.preventDefault();
        // dabar parent pasiekiu naudodamas closest metoda
        const parent = $(this).closest('.step');
        // .content>.step - parenka visus elementus kurie yra content tiesiogiai vaikai ir turi class .step
        const mainContent = $('.content>.step');
        const index =  mainContent.index(parent);

        // funkcionalumas
        parent.css('display', 'none');
        mainContent.eq(index + 1).css('display', 'block')

    })
})

// jeigu targetinu a elementa ir uzdedu e.preventDefault()
// ir turiu kitus linkus kuriems nenoriu uzdeti e.preventDefault()
// tai a pasirenku taip : 
// $('a[href="#"]')
