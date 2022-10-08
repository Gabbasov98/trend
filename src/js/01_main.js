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
