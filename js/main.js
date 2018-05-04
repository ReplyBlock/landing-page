
$(document).ready(function () {
  $(".scroll").click(function (event) {
    if ($(this.hash)[0]) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 600);
    }
  });

  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: false        // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();

  $(".video-intro").videoPopup({
    autoplay: 1,
    controlsColor: 'white',
    showVideoInformations: 0,
    width: 1000
  });
});
