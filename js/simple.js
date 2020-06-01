$('.navbar-collapse a').click(() => {
    $('.navbar-collapse').collapse('hide')
})

$(document).ready(() => {
    //
    $('#camera_wrap').camera({
        //thumbnails: true
        //alignment			: 'centerRight',
        autoAdvance: true,
        mobileAutoAdvance: true,
        fx: 'simpleFade',
        height: '48%',
        hover: false,
        loader: 'none',
        navigation: false,
        navigationHover: true,
        mobileNavHover: true,
        playPause: false,
        pauseOnClick: false,
        pagination: true,
        time: 5000,
        transPeriod: 1000,
        minHeight: '200px'
    });

    //	carouFredSel banner
    $('#banner .carousel.main ul').carouFredSel({
        auto: {
            timeoutDuration: 8000
        },
        responsive: true,
        prev: '.banner_prev',
        next: '.banner_next',
        width: '100%',
        scroll: {
            items: 1,
            duration: 1000,
            easing: "easeOutExpo"
        },
        items: {
            width: '350',
            height: 'variable',	//	optionally resize item-height
            visible: {
                min: 1,
                max: 4
            }
        },
        mousewheel: false,
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });



    $(window).bind("resize", updateSizes_vat).bind("load", updateSizes_vat);
    function updateSizes_vat() {
        $('#banner .carousel.main ul').trigger("updateSizes");
    }
    updateSizes_vat();


}); //
// isotop
var $container = $('#isotope-items'),
    $optionSet = $('#isotope-options'),
    $optionSets = $('#isotope-filters'),
    $optionLinks = $optionSets.find('a');
$container.isotope({
    filter: '*',
    layoutMode: 'fitRows'
});
$optionLinks.click(function () {
    var $this = $(this);
    // don't proceed if already selected
    if ($this.hasClass('selected')) {
        return false;
    }
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');

    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector
    });
    return false;
});
$(window).on("resize", function (event) {
    $container.isotope('reLayout');
});

// touchTouch
$('.thumb-isotope .thumbnail a').touchTouch();