// toggle buttons
let fullHeight = document.documentElement.scrollHeight
let viewHeight = window.innerHeight

const btnUp = document.getElementById("scroll-up")
const btnDown = document.getElementById("scroll-down")

const showNavButtons = () => {
    fullHeight = document.documentElement.scrollHeight
    viewHeight = window.innerHeight
    
    if(fullHeight > viewHeight){
        switch(locateUser()){
            case 1:
                btnUp.style.display = "none"
                btnDown.style.display = "flex"
                break;
            case getLast():
                btnUp.style.display = "flex"
                btnDown.style.display = "none"
                break;
            default:               
                btnUp.style.display = "flex"
                btnDown.style.display = "flex"
                break;
        }

        return
    }

    btnUp.style.display = "none"
    btnDown.style.display = "none"
}

btnUp.addEventListener("click", () => {
    let userPosition = window.scrollY
    scrollTo(0, userPosition - viewHeight)
})
btnDown.addEventListener("click", () => {
    let userPosition = window.scrollY
    scrollTo(0, userPosition + viewHeight)
})


const locateUser = () => {
    let userPosition = window.scrollY
    let half = Math.ceil(viewHeight / 2)
    let modulo = userPosition % viewHeight
    let i = ((userPosition - modulo) / viewHeight) + 1  

    if(modulo >= half){
        i++
    }
    
    return i
}


const getLast = () => {
    let modulo = fullHeight % viewHeight
    let i = (fullHeight - modulo) / viewHeight

    if(modulo){
        i++
    }
    
    return i
}

showNavButtons()

window.addEventListener("scroll", () => {
    showNavButtons()    
})
window.addEventListener("resize", () => {
    showNavButtons()   
})





//render projects
import { allProjects } from "./project-database.js"

const projectOverview = document.getElementById("project-overview")

console.log(projectOverview)
console.log(allProjects)







//filter
const webpage = document.getElementById("webpage")
const filterPopup = document.getElementById("filter-popup")
const filterBtn = document.getElementById("filter-buttons")

filterBtn.addEventListener("click", () => {
    filterPopup.style.display = "flex"
    webpage.classList.add("blured")
})



const filterCloseBtn = document.getElementById("close-button")

filterCloseBtn.addEventListener("click", () => {
    filterPopup.style.display = "none"
    webpage.classList.remove("blured")
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