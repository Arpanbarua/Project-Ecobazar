// $(function () {
//     let searchbtn = document.querySelector(".search_icon");
//     let searchbox = document.querySelector("#search-box");
//     let crossbtn = document.querySelector(".cross");

//     searchbtn.addEventListener('click', function () {
//         searchbox.classList.toggle('search_active');

//     });

//     crossbtn.addEventListener('click', function () {
//         searchbox.classList.remove('search_active');

//     });
// });



$(function () {

    document.body.style.overflow = 'hidden';
    let searchbtn = $('.search_icon');
    let searchbox = $('#search-box');
    let crossbtn = $('.cross');

    searchbtn.on('click', function () {
        searchbox.toggleClass('search_active');
         $('body').addClass('no-scroll');
    });

    crossbtn.on('click', function () {
        searchbox.removeClass('search_active');
        $('body').removeClass('no-scroll');

    });


    // Banner part for sliding

    $('.sliders').slick({
        dots: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: `<span class="prev"><iconify-icon icon="solar:arrow-left-linear" width="24" height="24"></iconify-icon></span>`,
        nextArrow: `<span class="next"><iconify-icon icon="mynaui:arrow-right" width="24" height="24"></iconify-icon></span>`,
        autoplay: true,
        autoplaySpeed: 3000,

    });

    // product(featured) part for sliding
    $(".products_parent").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: `<span class="prev"><iconify-icon icon="solar:arrow-left-linear" width="24" height="24"></iconify-icon></span>`,
        nextArrow: `<span class="next"><iconify-icon icon="mynaui:arrow-right" width="24" height="24"></iconify-icon></span>`,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2, 
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    // for tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // for tooltips

    // category filter
    $('.category-button').categoryFilter();

    // for countdown
    $('.hq-countdown').hqCountdownTimer({
  endMessage: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg> Countdown Completed!',
  onEnd: function() {
    console.log('Countdown finished!');
  }
});

// for aos
AOS.init();

});




