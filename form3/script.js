$(() => {
    $('button').click(function(e) {
        e.preventDefault()
        const userInput = {};
        userInput.name = $('input[name="name"]').val();
        userInput.gender = $('select').val();
        const hobbies = $('input[type="checkbox"]:checked').map(function() {
           return $(this).val()
        })
        userInput.hobbies = [...hobbies];
        const agreement = $('input[type="radio"]:checked').val();
        userInput.agreement = agreement;
        console.log(userInput);
    })
})