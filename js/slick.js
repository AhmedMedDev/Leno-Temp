//testimonial our team  
     $('.testi .container ').slick({//for testi
      prevArrow:$('.testi .prev'),
      nextArrow:$('.testi .next'),
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay:true,
      autoplaySpeed:1000,
      responsive: [
            {
                breakpoint: 990,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
          ]


      
  });


//testimonial our producte
    $('.testi-phone .container ').slick({
        prevArrow:$('.testi-phone .prev'),
        nextArrow:$('.testi-phone .next'),
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        //autoplay:true,
        autoplaySpeed:1000,
        responsive: [
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
            breakpoint: 577,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
      ]




  });














