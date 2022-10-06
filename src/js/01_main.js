
$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 999-9999', { autoclear: false }, { placeholder: '+7             ' });


    if (window.innerWidth < 768) {
        portfolioSlider()
    }
    if (window.innerWidth < 1200) {
        projectsSliders()
        trustSliders()
    }





});
