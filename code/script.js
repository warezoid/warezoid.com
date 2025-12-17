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
    },
]

let slideshowIndex = 0
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



slideshow.addEventListener("click", () => { 
    window.location.href = slideshowProjects[slideshowIndex].link
})










/*

    Created by warezoid with the love of freedom and numbers.
    
    I would like to thank my friends for their help in developing warezoid.com, whether it be through advice, design choices or sharing their opinions.





    SOURCES

    Sources can be seen as links to products used in warezoid.com, including graphics and research tools. I have chosen not to list elementary products such as HTML, CSS, JavaScript and many others.
    
    1. Graphics
        1.1. Google fonts - font used in warezoid.com: [ fonts.google.com ]
        1.1.1 Bakbak One - specific font used in Bitcointags: [ fonts.google.com/specimen/Cal+Sans ]
        1.2. SVGrepo - svg icons: [ svgrepo.com ]
        1.3. Haikei - blob generator: [ app.haikei.app ]
        1.4. Coolors - color palettes: [ coolors.co ]
        1.5. Figma - warezoid.com design: [ figma.com ]

    2. Research tools
        2.1. ChatGPT: [ chatgpt.com ]
        2.2. Stackoverflow: [ stackoverflow.com ]
        2.3. DeepL: [ deepl.com ]
        2.4. And the Internet itself.
    
    3. Validators
      3.1. HTML validator: [ validator.w3.org ]
      3.2. CSS validator: [ jigsaw.w3.org/css-validator ]

*/