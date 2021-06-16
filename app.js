let slidesPlugin = (activeSlide = 0) => {
    const slides = document.querySelectorAll('.slide')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    slides[activeSlide].classList.add('active')

    // let clearActiveClasses = () => {
    //     for (const slide of slides) {
    //         slide.classList.remove('active')
    //     }
    // }

    let clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin()
