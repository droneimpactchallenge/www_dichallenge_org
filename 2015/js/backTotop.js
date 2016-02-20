 function back_to_top()
{
    /* Cache back-to-top button object */
    var $top = $('<span id="back-to-top"><i class="fa fa-angle-up "></i></span>').appendTo('body');

    /* Cross-browser compatible in scrollTop */
    var $body = (!window.opera) ? $('html, body') : (document.compatMode == 'CSS1Compat'
        ? $('html') : $('body'));

    if ($top.length == 0)
         return;
 
    /* Hide back-to-top button at first */
    $top.hide();
 
    /* Fade in back-to-top button when need */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $top.fadeIn();
        } else {
            $top.fadeOut();
        }
    });
 
    /* Scroll to top when click back-to-top button */
    $top.click(function () {
        $body.animate({ scrollTop: 0 }, 800);
    });
}

back_to_top();