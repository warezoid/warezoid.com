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
const webpage = document.getElementById("webpage")
const galleryPopup = document.getElementById("gallery-popup")
const galleryCloseBtn = document.getElementById("gallery-popup-closeBtn")

galleryCloseBtn.addEventListener("click", () => {
    galleryPopup.style.display = "none"
    webpage.classList.remove("blured")
})



const galleryContent = document.getElementById("gallery-content")
const galleryContentImages = Array.from(galleryContent.children)
const galleryPopupImage = document.getElementById("gallery-popup-image")

galleryContent.addEventListener("click", (e) => {
    if(e.target.nodeName == "IMG"){
        galleryPopupImage.src = e.target.attributes.src.nodeValue
        index = galleryContentImages.indexOf(e.target.parentElement)
        galleryPopup.style.display = "flex"
        webpage.classList.add("blured")
    }
})



const backBtn = document.getElementById("gallery-popup-backButton")
const forwardBtn = document.getElementById("gallery-popup-forwardButton")
let index = -1

const setImage = (i) => {
    galleryPopupImage.src = galleryContentImages[i].firstElementChild.attributes.src.nodeValue
}

backBtn.addEventListener("click", () => {
    if(index != -1){
        index--

        if(index < 0){
            index = galleryContentImages.length - 1
        }

        setImage(index)
    }
})

forwardBtn.addEventListener("click", () => {
    if(index != -1){
        index++

        if(index > (galleryContentImages.length - 1)){
            index = 0
        }

        setImage(index)
    }
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