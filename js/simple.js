$(document).ready(() => {
   
    $('.navbar-collapse a').click(() => {
        $('.navbar-collapse').collapse('hide')
    })

    $('.sub-menu').hover(() => {
        $('.dropdown-menu').show()
    }/*, () => $('.dropdown-menu').hide()*/)

});
// end document.ready
