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
    });

    crossbtn.on('click', function () {
        searchbox.removeClass('search_active');
    });


    // Banner part for sliding

    $('.sliders').slick({
        dots: true,
        slidesToShow: 1,
        arrows: true, 
        prevArrow: `<span class="prev"><iconify-icon icon="solar:arrow-left-linear" width="24" height="24"></iconify-icon></span>` ,
        nextArrow: `<span class="next"><iconify-icon icon="mynaui:arrow-right" width="24" height="24"></iconify-icon></span>`,
        autoplay: true,
        autoplaySpeed: 3000,

    });



});




