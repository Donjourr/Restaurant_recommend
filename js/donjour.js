
// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})


function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      // ...
      document.getElementById('result-count').innerHTML = parseInt(document.getElementById('result-count').innerHTML) + 1;
      // ...
    }
  }
  
  // 만족 버튼을 누를 때마다 숫자를 증가시킵니다.
  document.getElementById('satisfaction-button').addEventListener('click', function() {
    document.getElementById('satisfaction-count').innerHTML = parseInt(document.getElementById('satisfaction-count').innerHTML) + 1;
    });