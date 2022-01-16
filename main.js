const hamburger_menu = document.querySelector(".hamburger-menu")
const nav = document.querySelector(".nav")

hamburger_menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.body.onload = function() {
    setTimeout(() => {
      var preloader = document.getElementById('page-preloader');
      if(!preloader.classList.contains('done')){
          preloader.classList.add('done');
      }
    }, 1000);
}

$('.read-more').on('click', function () {
  
    $('.text-hidden').toggleClass('hidden')
    
    if ($('.text-hidden').hasClass('hidden')) {
      $(this).html('Read More')
    } else {
      $(this).html('Hidden')
    }
    
  })