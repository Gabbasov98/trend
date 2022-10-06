let pageSlider = new Swiper(".page",{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    direction: "vertical",

    slidesPerView: "auto",
    speed: 1000,

    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    observer: true,
    observeParents: true,
    observeSlideChildren: true,

    // allowTouchMove: false,

    init: false,

    on: {
        init: function () {
            setScrollType()
        },
        slideChange: function () {
            setHeaderColor()
            // setScrollType()
        },
        resize: function () {
            setScrollType()
        }
    },
    breakpoints: {
        320: {
            freeMode: true
        },
        992: {
            freeMode: false
        },
    }
})


$(".nav__link").click(function (e) {
    e.preventDefault()
    let targetId = $(this).attr("href")
    let screenIndex = $(`#${targetId}`).index()
    console.log(screenIndex)
    console.log(targetId)
    pageSlider.slideTo(screenIndex,800)
})


function setScrollType() {
    if($(".wrapper").hasClass("_free")){
        $(".wrapper").removeClass("_free")
        pageSlider.params.freeMode = false
    }
    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index]
        const pageSlideContent = pageSlide.querySelector(".screen__content")
        if(pageSlideContent) {
            const pageSlideContentHeight = pageSlideContent.offsetHeight

            if(pageSlideContentHeight > window.innerHeight) {
                $(".wrapper").addClass("_free")
                pageSlider.params.freeMode = true
                break
            }
        }
    }
}

function setHeaderColor() {
    let activeSlide = $(".page__screen")[pageSlider.realIndex]

    if($(activeSlide).hasClass("light-slide")) {
        $(".header").addClass("header--dark")
    }else{
        $(".header").removeClass("header--dark")
    }
}


// pageSlider.init()




const resizeHandlerSlider = () => {
    if (window.innerWidth > 992) {
        pageSlider.init()
    }
}



resizeHandlerSlider()

window.addEventListener('resize', resizeHandlerSlider);
