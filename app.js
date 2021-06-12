const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

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