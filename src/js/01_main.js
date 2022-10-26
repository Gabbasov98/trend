$(".form-group input").each(function(index, el) {
    if ($(el).val()) {
        $(el).addClass("input-active")
    } else {
        $(el).removeClass("input-active")
    }
});

$(".form-group textarea").each(function(index, el) {
    if ($(el).val()) {
        $(el).addClass("input-active")
    } else {
        $(el).removeClass("input-active")
    }
});

$(".form-group input").change(function() {
    let val = $(this).val()
    console.log(val)
    if (val) {
        $(this).addClass("input-active")
    } else {
        $(this).removeClass("input-active")
    }
})

$(".form-group textarea").change(function() {
    let val = $(this).val()
    console.log(val)
    if (val) {
        $(this).addClass("input-active")
    } else {
        $(this).removeClass("input-active")
    }
})


function fadeIn() {
    $(".animate-opacity").each(function(index, el) {
        let wt = $(window).scrollTop();
        let wh = $(window).height();
        let et = $(el).offset().top;
        let eh = $(el).outerHeight();
        let dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("animate-opacity--active")
        }
    });
}

fadeIn()
$(window).scroll(function() {
    fadeIn()
});