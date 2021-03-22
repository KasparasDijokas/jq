$(() => {
    // $('.step').hide();
    $('.step').css('display', 'none');
    $('a').click(function(e) {
        e.preventDefault();
        // kai paspaudziu ant 'Next' (a elementas) - issaugau to clickinto elemento parent.parent
        const parent = $(this).parent().parent();
        // mainContent yra visu div elementu parent (div'as kuris savyje turi 3 vaikus, kuriuos noriu matyti arba paslepti)
        // .content>div grazina array su tiesioginiais .content vaikais (bet parenka tik div)
        const mainContent = $('.content>div');
        // perduodu parent i index metoda ir jis grazina index
        const index =  mainContent.index(parent);
        console.log(index);
    })
})

