var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    // direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // on: {
    //     resize: function () {
    //       swiper.changeDirection(getDirection());
    //     },
    //   },
  
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


// function getDirection() {
//     var windowWidth = window.innerWidth;
//     var direction =windowWidth <= 760? 'vertical' : 'horizontal';
//     console.log(direction)
//     return direction;
//   }