$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } // End if
    });
  });


//   function scrollThere(targetElement, speed) {
//     // initiate an animation to a certain page element:
//     $('html, body').stop().animate(
//       { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
//       speed, // speed in milliseconds
//       'swing' // easing
//     ); // end animate
//   } // end scrollThere function definition
  

// //--- START SCROLL EVENTS ---//
// // detect a mousewheel event (note: relies on jquery mousewheel plugin):
// $(window).on('mousewheel', function (e) {

//     // get Y-axis value of each div:
//     var div1y = $('#tab1').offset().top,
//         div2y = $('#tab2').offset().top,
//         div3y = $('#tab3').offset().top,
//         div4y = $('#tab4').offset().top,
//         div5y = $('#tab5').offset().top,
//         div6y = $('#tab6').offset().top,
//         // get window's current scroll position:
//         lastScrollTop = $(this).scrollTop(),
//         // for getting user's scroll direction:
//         scrollDirection,
//         // for determining the previous and next divs to scroll to, based on lastScrollTop:
//         targetUp,
//         targetDown,
//         // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
//         targetElement;
  
//     // get scroll direction:
//     if ( e.deltaY > 0 ) {
//       scrollDirection = 'up';
//     } else if ( e.deltaY <= 0 ) {
//       scrollDirection = 'down';
//     } // end if
  
//     // prevent default behavior (page scroll):
//     e.preventDefault();
  
//     // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
//     if (lastScrollTop === div1y) {
//       targetUp = $('#tab1');
//       targetDown = $('#tab2');
//     } else if (lastScrollTop === div2y) {
//       targetUp = $('#tab1');
//       targetDown = $('#tab3');
//     } else if (lastScrollTop === div3y) {
//       targetUp = $('#tab2');
//       targetDown = $('#tab4');
//     } else if (lastScrollTop === div4y) {
//       targetUp = $('#tab3');
//       targetDown = $('#tab5');
//     } else if (lastScrollTop === div5y) {
//       targetUp = $('#tab4');
//       targetDown = $('#tab6');
//     } else if (lastScrollTop === div6y) {
//       targetUp = $('#tab5');
//       targetDown = $('#tab6');
//     } else if (lastScrollTop < div2y) {
//       targetUp = $('#tab1');
//       targetDown = $('#tab2');
//     } else if (lastScrollTop < div3y) {
//       targetUp = $('#tab2');
//       targetDown = $('#tab3');
//     } else if (lastScrollTop < div4y) {
//       targetUp = $('#tab3');
//       targetDown = $('#tab4');
//     } else if (lastScrollTop < div5y) {
//       targetUp = $('#tab4');
//       targetDown = $('#tab5');
//     } else if (lastScrollTop < div6y) {
//       targetUp = $('#tab5');
//       targetDown = $('#tab6');
//     } else if (lastScrollTop > div6y) {
//       targetUp = $('#tab6');
//       targetDown = $('#tab6');
//     } // end else if
  
//     // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
//     if (scrollDirection === 'down') {
//       targetElement = targetDown;
//     } else if (scrollDirection === 'up') {
//       targetElement = targetUp;
//     } // end else if
  
//     // scroll smoothly to the target element:
//     scrollThere(targetElement, 400);
  
//   }); // end on mousewheel event
//   //--- END SCROLL EVENTS ---//