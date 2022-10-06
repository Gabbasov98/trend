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
