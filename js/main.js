$(window).scroll(function(){
    $(".top-header").toggleClass('hidden',$(this).scrollTop()>5)
    $("#scroll").toggleClass('fix',$(this).scrollTop()>5)
    $(".main-inner-wrapper").toggleClass('fix_1',$(this).scrollTop()>5)
  });
// window.addEventListener("scroll", function(){
//   var navBar = document.querySelector('navBar');
//   navBar.classList.toggle("sticky", window.scrollY > 0);
// })


//   // window.addEventListener('scroll', function (){
  //   let navbar = document.getElementsByClassName('top-navigation');
  //   if (this.window.pageYOffset >=500){
  //     navbar.classList.add('sticky');
  //   }
  //   else{
  //     navbar.classList.remove('sticky');
  //   }
  // });
  