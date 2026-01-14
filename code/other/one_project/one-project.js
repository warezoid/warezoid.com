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





// photo gallery
const galleryPopupImage = document.getElementById("gallery-popup-image")
const galleryContent = document.getElementById("gallery-content")
const galleryContentImages = Array.from(galleryContent.children)
let index = -1

const setImage = (i) => {
    galleryPopupImage.src = galleryContentImages[i].firstElementChild.attributes.src.nodeValue
}

const incrementIndex = () => {
    if(index != -1){
        index++

        if(index > (galleryContentImages.length - 1)){
            index = 0
        }

        setImage(index)
    }
}

const decrementIndex = () => {
    if(index != -1){
        index--

        if(index < 0){
            index = galleryContentImages.length - 1
        }

        setImage(index)
    }    
}

const handleKeyUp = (e) => {
    switch(e.key){
        case "ArrowLeft":
            decrementIndex()
            break
        case "ArrowRight":
            incrementIndex()
            break;
    }  
}



const webpage = document.getElementById("webpage")
const galleryPopup = document.getElementById("gallery-popup")
const galleryCloseBtn = document.getElementById("gallery-popup-closeBtn")

galleryCloseBtn.addEventListener("click", () => {
    galleryPopup.style.display = "none"
    webpage.classList.remove("blured")
    window.removeEventListener("keyup", handleKeyUp)
})



galleryContent.addEventListener("click", (e) => {
    if(e.target.nodeName == "IMG"){
        galleryPopupImage.src = e.target.attributes.src.nodeValue
        index = galleryContentImages.indexOf(e.target.parentElement)
        galleryPopup.style.display = "flex"
        webpage.classList.add("blured")
        window.addEventListener("keyup", handleKeyUp)
    }
})



const backBtn = document.getElementById("gallery-popup-backButton")
const forwardBtn = document.getElementById("gallery-popup-forwardButton")

backBtn.addEventListener("click", () => {
    decrementIndex()
})

forwardBtn.addEventListener("click", () => {
    incrementIndex()
})










/* Created by warezoid with the love of freedom and numbers. */