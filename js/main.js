window.onresize(function () {
    var $carouselList = $('.carousel')
    endableCarousel()
})
$(function () {
    endableCarousel()
})
function endableCarousel() {
    if ($carouselList.style.display === 'block' && carouselComponent.isNotActive) {
        carouselComponent($carouselList)
    }
}