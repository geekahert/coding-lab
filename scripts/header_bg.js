window.addEventListener('scroll', function() {
      var scroll = document.documentElement;
      var navbar = document.getElementsByClassName('navbar');
      if(scroll.scrollTop > 100){
          navbar[0].classList.add("change_opacity");


      }
      else {

          navbar[0].classList.remove("change_opacity");
      }


    })
