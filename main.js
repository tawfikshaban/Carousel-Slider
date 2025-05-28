let prev = document.querySelector(".left")
let next = document.querySelector(".right")
let SeeMoreButton = document.querySelectorAll(".seeMore")
let BackButton = document.querySelector(".BackButton")

let carousel = document.querySelector(".Carousel")
let listHtml = document.querySelector(".carousel-items")

prev.onclick = function () {
    showSlider("prev")
}
next.onclick = function () {
    showSlider("next")
}

let unAcceptClick;

let showSlider = (type) => {
    next.style.pointerEvents = 'none';

    prev.style.pointerEvents = 'none';

    let items = document.querySelectorAll(".carousel-items  li")
    if (type === "next") {
        listHtml.appendChild(items[0])
        carousel.classList.add("next")
    } else {
        let positionLast = items.length - 1
        listHtml.prepend(items[positionLast])
        carousel.classList.add("prev")
    }
    clearTimeout(unAcceptClick)
    unAcceptClick = setTimeout(() => {
        next.style.pointerEvents = 'auto';

        prev.style.pointerEvents = 'auto';
    }, 2000);
}

SeeMoreButton.forEach((button) => {
    button.addEventListener("click", () => {
        carousel.classList.add("showDetail")
    })
})

BackButton.addEventListener("click", () => {
    carousel.classList.remove("showDetail")

})