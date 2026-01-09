// blobs animation
const tween1 = KUTE.fromTo(
    '#blob-1',
    { path: '#blob-1' },
    { path: '#blob-2' },
    { repeat: 999, duration: 6000, yoyo: true }
).start()

const tween2 = KUTE.fromTo(
    '#blob-3',
    { path: '#blob-3' },
    { path: '#blob-4' },
    { repeat: 999, duration: 6000, yoyo: true }
).start()





// navbar
let navbarBtns = Array.from(document.getElementsByClassName("navbar-button"))
let activeElement = navbarBtns[0]

const updateNavbar = () => {
    let previousActiveElement = Array.from(document.getElementsByClassName("active"))[0]
    previousActiveElement.classList.remove("active")

    activeElement.classList.add("active")
}





// toggle navigation buttons
const homepage = document.getElementById("homepage-main")
const projects = document.getElementById("projects-main")
const contact = document.getElementById("contact-main")

let currentElement

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        currentElement = entry.target
        toggleNavButtons()
    }
  })
}, {
    threshold: 0.51
})

observer.observe(homepage)
observer.observe(projects)
observer.observe(contact)

const btnUp = document.getElementById("scroll-up")
const btnDown = document.getElementById("scroll-down")

const toggleNavButtons = () => {
    clearInterval(slideShowInterval)
    clearInterval(loadingInterval)
    
    switch(currentElement){
        case homepage:
            btnUp.style.display = "none"
            btnDown.style.display = "flex"
            activeElement = navbarBtns[0]
            break;
        case projects:
            btnUp.style.display = "flex"
            btnDown.style.display = "flex"
            activeElement = navbarBtns[1]
            startSlideshow()
            break;
        case contact:
            activeElement = navbarBtns[2]
            btnUp.style.display = "flex"
            btnDown.style.display = "none"
            break;
    }

    updateNavbar()
}

btnUp.addEventListener("click", () => {
    switch(currentElement){
        case homepage:
            location.hash = "#homepage-main"
            break;
        case projects:
            location.hash = "#homepage-main"
            break;
        case contact:
            location.hash = "#projects-main"
            break;
    }
})

btnDown.addEventListener("click", () => {
    switch(currentElement){
        case homepage:
            location.hash = "#projects-main"
            break;
        case projects:
            location.hash = "#contact-main"
            break;
        case contact:
            location.hash = "#contact-main"
            break;
    }
})





// progress bar loading
let progress
let loadingInterval

const startLoading = () => {
    clearInterval(loadingInterval)
    progress = 0

    loadingInterval = setInterval(() => {
        progress++
  
        if(progress > 100){
            clearInterval(loadingInterval)
            
            return
        }
               
        loadingCircle.style.background = `conic-gradient(#fff2d8 0% ${progress}%, #fff2d886 ${progress}% 100%)`
    }, 75)
}





// project slideshow
const slideshowProjects = [
    {
        id: 0,
        type: "software",
        background: "bitcointags.png",
        name: "Bitcointags",
        link: "https://github.com/warezoid/bitcointags",
        description: "Browser extension that converts the fiat price of a product or service within a selected HTML entity into an approximate bitcoin price."
    },
    {
        id: 1,
        type: "3d printing",
        background: "sponge_holder.png",
        name: "Sponge holder",
        link: "https://warezoid.com/other/one_project/sponge_holder/sponge-holder.html",
        description: "The goal of this project is to create a kitchen holder that can hold a sponge and dish detergent and liquid soap."
    }
]

const getSlideshowIndex = () => {
    const max = slideshowProjects.length    
    return Math.floor(Math.random() * max)
}

let slideshowIndex = getSlideshowIndex()
let slideShowInterval

const slideshow = document.getElementById("slideshow")
const slideshowType = document.getElementById("slideshow-type")
const slideshowName = document.getElementById("slideshow-name")
const slideshowDescription = document.getElementById("slideshow-description")
const loadingCircle = document.getElementById("slideshow-loading")

const updateSlideshow = () => {
    let obj = slideshowProjects[slideshowIndex]

    slideshow.style.backgroundImage = `url(./src/img/slideshow/${obj.background})`
    slideshowType.innerText = `${obj.type}.`
    slideshowName.innerText = `${obj.name}`
    slideshowDescription.innerText = `${obj.description}`

    startLoading()
}

const startSlideshow = () => {
    updateSlideshow()
    
    slideShowInterval = setInterval(() => {
        if(slideshowIndex == slideshowProjects.length - 1){
            slideshowIndex = 0
        }
        else{
            slideshowIndex++
        }
        
        slideshow.style.animation = "fadeOut 0.2s forwards"
    }, 8000)
}

slideshow.addEventListener("animationend", (e) => {
    if(e.animationName == "fadeOut"){
        slideshow.style.animation = "fadeIn 0.2s forwards"
        updateSlideshow()
    }
})

slideshow.addEventListener("click", () => { 
    window.location.href = slideshowProjects[slideshowIndex].link
})










/* Created by warezoid with the love of freedom and numbers. */