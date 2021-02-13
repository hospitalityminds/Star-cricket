
    $(document).ready(function(){

        // ********* Hamburger Menu  *********

        $('.hamburger').on('click',function(){
        $('.nav-list').toggleClass('active');
    });


    // **************  Window on Scroll  ***************

    $(window).scroll(function () {
	    var scroll = $(window).scrollTop();
	    if (scroll > 150) {
        $(".nav").css({"box-shadow":"0 5px 10px rgba(0,0,0,.5)","background":"white"});
        $(".logo").css({"color":"black"});
	    } else {
        $(".nav").css({"box-shadow":"none","background":"transparent"});
        $(".logo").css({"color":"white"});
	    }
	  });

    // Link to content body

    const navlinks = document.querySelectorAll('.nav-link');
    const ul = document.querySelector('.nav-list');

    navlinks.forEach(navlink =>{
      navlink.addEventListener('click',function(){
          ul.classList.remove('active');
      })
    });


}) 
