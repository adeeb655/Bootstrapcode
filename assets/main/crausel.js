$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
0:{
    items:1
},
600:{
    items:5     
},
1000:{
    items:3
}
}
})

$('.story_slider ').slick({
    dots: true,

});


// $('.logos ').slick({
//   slidesToShow: 4,
//    slidesToScroll: 1,
//    autoplay: true,
//    autoplaySpeed: 1000,
//  }); 