$('.owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
0:{
    items:1
},
600:{
    items:3
},
1000:{
    items:5
}
}
})


$('.logos ').slick({
  slidesToShow: 4,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1000,
 }); 