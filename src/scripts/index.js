






/* ******
* Do not use scroll event. Instead refer to  IntersectionObserver api 
******
***
**/

/*
$(document).ready(function() {

  const $window = $(window);
  const $animate_target = $('[animate]');
  const animate_type = $animate_target.attr('animate');


  $window.on('load', function() {

  })

  
  $window.on('scroll', function(e) {

    isScrolledFromTop()
      ? $animate_target
        .removeClass('not-in-view')
        .addClass('in-view')
        .attr('animate', 'fade-in')
      : $animate_target
        .removeClass('in-view')
        .addClass('not-in-view')
        .attr('animate', 'fade-out');
    
    isScrolledIntoView($animate_target)
      ? $animate_target
        .removeClass('not-in-view')
        .addClass('in-view')
        .attr('animate', 'fade-childrenFromLeft')
      : $animate_target
        .removeClass('in-view')
        .addClass('not-in-view')
        .attr('animate', 'fade-out');
  
  })

})



function isScrolledIntoView(elem) {
  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();
  let elemTop = $(elem).offset().top;
  let elemBottom = elemTop + $(elem).height();

  let isVisible = ((elemBottom <= docViewTop) && (elemTop >= docViewBottom));
  return isVisible;
}

function isScrolledFromTop() {
  let docViewTop = $(window).scrollTop();
  let isViewNotTop = !(docViewTop <= 0);
  return isViewNotTop;
}

*/