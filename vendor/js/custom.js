// -------- Jquery start ------- //
$(function () {

    // ripple btn effect
    $('.ripple').click(function (event) {
        var $btn = $(this),
            $div = $('<div/>'),
            btnOffset = $btn.offset(),
            xPos = event.pageX - btnOffset.left,
            yPos = event.pageY - btnOffset.top;

        $div.addClass('ripple-effect');
        $div
            .css({
                height: $btn.height(),
                width: $btn.height(),
                top: yPos - ($div.height() / 2),
                left: xPos - ($div.width() / 2),
                background: $btn.data("ripple-color") || "rgba(255, 255, 255, 0.06)"
            });
        $btn.append($div);

        window.setTimeout(function () {
            $div.remove();
        }, 2000);
    });

    // focus-placeholder
    $('.focus-placeholder .form-control').bind('keyup keydown', function () {
        if ($(this).val().length === 0) {
            $(this).closest('.form-group').find('label').removeClass('fill');
        } else {
            $(this).closest('.form-group').find('label').addClass('fill')
        }
    });
    $('.focus-placeholder .form-control').each(function () {
        if ($(this).val().length === 0) {
            $(this).closest('.form-group').find('label').removeClass('fill');
        } else {
            $(this).closest('.form-group').find('label').addClass('fill')
        }
    });


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            )

            {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                }
            }
        });

});


// equalheight
equalheight = function (container) {

    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    equalheight('.app-notificaton');
});


$(window).resize(function () {
    equalheight('.app-notificaton');
});

// -------- Jquery end ------- //

