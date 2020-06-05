$(document).ready(() => {
   
    $('.navbar-collapse a').click(() => {
        $('.navbar-collapse').collapse('hide')
    })

    $('.sub-menu').hover(() => {
        const dropDownMenu = $(this).children(".dropdown")
        if(dropDownMenu.is(":visible")) {
            dropDownMenu.parent().toggleClass("open")
        }
    }/*, () => $('.dropdown').hide()*/)

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

});
// end document.ready
