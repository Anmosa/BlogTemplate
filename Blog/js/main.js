$(document).ready(function(){

    $nav = $(".nav");
    $toggleCollapse = $(".toggle-collapse")

    // Click event on Toggle Menu //
    $toggleCollapse.click(function(){
        $nav.toggleClass("collapse")
    });

    // // OWL Carousel for blog
    // $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel;

    //   // owl-crousel for blog
    //   $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     autoplay: false,
    //     autoplayTimeout: 3000,
    //     dots: false,
    //     nav: true,
    //     navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    //     responsive: responsive
    
});