$('.owl-carousel').owlCarousel({
   loop: true,
   stagePadding:50,
   margin: 10,
   nav:true,
   slideTransition: 'ease',
   responsive: {
      0:{
         items: 1,
         stagePadding: 30
      },
      400:{
         items:1,
         stagePadding:50
      },
      600:{
         items:2,
         slideBy: 2
      },
      820:{
         items:3,
         slideBy: 3
      },
      1100:{
         center:true,
         items:4,
         slideBy:4
      },
      1400:{
         items:5,
         slideBy:5
      },
      2000:{
         items:6,
         slideBy: 6
      }
   }
});