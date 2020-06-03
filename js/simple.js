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

});
// end document.ready
