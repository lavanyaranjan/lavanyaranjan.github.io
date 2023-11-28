console.log("Lights on!");

$('.title').click(function(){
    $(this).parents('.week').find('.content').slideToggle();
});
