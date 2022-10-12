$("[data-modal]").click(function () {
    let modalId = $(this).attr("data-modal")

    openModal(modalId)
})

function openModal(modalId){
    $(`#${modalId}`).addClass("modal--active")
    $("body").addClass("fixed-body")
}

$(".modal").click(function () {
    closeModal()
})

$(".modal__close").click(function () {
    closeModal()
})

$(".modal__dialog").click(function (e) {
    e.stopPropagation()
})


function closeModal() {
    $('.modal').removeClass("modal--active")
    $("body").removeClass("fixed-body")
}

function showHelpModal(data) {
    let desc = ``
    console.log(data.desc)

    for(let i = 0; i<data.desc.length; i++){
        // console.log(data.desc[i])
        desc = `
            ${desc} 
            <p>${data.desc[i]}</p>
        `
    }

    $(".help-modal__title").html(data.title)
    $(".help-modal__desc").html(desc)
    $(".help-modal__img img").attr("src",`img/${data.img}.svg`)

    openModal('helpModal')
}
