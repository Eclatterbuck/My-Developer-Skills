

$('#add').on('click', function() {
   let $input = $('input').val();
   $('.main').append(`<div id="text"> <span id="box"> X </span>${$input}</div>`);

        $('inout').val('');
})

$('.main').on('click', function() {
let $listText = $('#text');
$listText.remove();


})