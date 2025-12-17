# warezoid.com
[warezoid.com](https://warezoid.com/) repository serves as repository for my personal portfolio website, which contains several interesting components created according to my own concept.



## Table of content
- [License](#license)
- [Components](#components)
    - [Project slideshow](#project-slideshow)
        - [HTML](#html)
        - [JavaScript](#javascript)
            - [Projects rendering](#projects-rendering)
            - [Changing slideshowIndex](#changing-slideshowindex)
    - [Project overview](#project-overview)
    - [Photo gallery](#photo-gallery)
- [Sources](#sources)



## License
Project is licensed under the MIT License, except for the contents of the directories listed below. Full text of the license can be found [here](./LICENSE.md). For more information, please visit [Wikipedia - MIT License](https://en.wikipedia.org/wiki/MIT_License).

```
/src/font
/src/img/blobs
/src/img/icons
```



## Components
Below is a general description of how the components that interest me on [warezoid.com](https://warezoid.com/) work.


### Project slideshow
Project slideshow is a component used to present a selection of my projects. The content of the component changes at certain intervals, creating the impression of a slideshow.

![Project slideshow](./docs/img/project_slideshow.gif)

#### HTML
Only the content changes in the HTML section. Below you will find the HTML skeleton.

```html
<div class="projects-slideshow">
    <div class="one-project" id="slideshow">
        <div class="one-project-toolbar">
            <div id="slideshow-loading"></div>
            <p id="slideshow-type">...</p>
        </div>

        <div class="one-project-text">
            <h3 id="slideshow-name">...</h3>
            <p id="slideshow-description">...</p>
        </div>
    </div>
</div>
```

#### JavaScript
All projects included in the project slideshow are stored in an object array called **slideshowProjects** with the following structure. Short descriptions of individual properties have been added.

```javascript
const slideshowProjects = [
    {
        id: ...,
        type: "...",
        background: "...",
        name: "...",
        link: "...",
        description: "..."
    },
]

/*
    id: project id, used while rendering project slideshow
    type: project type (software, 3d printing, ...), used to sort projects
    background: path to background image
    name: project name
    link: link to project page
    description: short description of the project
*/
```

##### Projects rendering
The entire rendering of objects depends on the **slideshowIndex** variable, which is changed at certain time intervals. The function that renders objects is shown below.

```javascript
let slideshowIndex = 0
let slideShowInterval

const slideshow = document.getElementById("slideshow")
const slideshowType = document.getElementById("slideshow-type")
const slideshowName = document.getElementById("slideshow-name")
const slideshowDescription = document.getElementById("slideshow-description")
const loadingCircle = document.getElementById("slideshow-loading")

const updateSlideshow = () => {
    let obj = slideshowProjects[slideshowIndex]

    slideshow.style.backgroundImage = `url(.../${obj.background})`
    slideshowType.innerText = `${obj.type}.`
    slideshowName.innerText = `${obj.name}`
    slideshowDescription.innerText = `${obj.description}`

    startLoading()
}
```

**startLoading** function is responsible for animating the loading wheel in the upper left corner.

![Project slideshow](./docs/img/project_slideshow.gif)

Below you will find the code of **startLoading** function:

```javascript
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
```

##### Changing slideshowIndex
**startSlideshow** function gradually increments the value of the **slideshowIndex** variable at regular intervals in the range *<0; slideshowProjects.length - 1>* to prevent overflow. The corresponding code is shown below.

```javascript
const startSlideshow = () => {
    startLoading()

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
```

To complete the code, you need to add a function that redirects users to the current project page when they click on the slideshow.

```javascript
slideshow.addEventListener("click", () => { 
    window.location.href = slideshowProjects[slideshowIndex].link
})
```

The entire functionality is then launched by calling the **startSlideshow** function.

```javascript
startSlideshow()
```


### Project overview
### Photo gallery



## Sources
Sources can be seen as links to products used in [warezoid](https://warezoid.com/), including APIs, graphics and research tools. I have chosen not to list elementary products such as HTML, CSS, JavaScript, and many others.

- **Graphics**
    - Github - logo and space for collaboration: [github.com](https://github.com)
    - Google Fonts - font used in warezoid: [fonts.google.com](https://fonts.google.com/)
        - Cal Sans - specific font used in warezoid: [Cal Sans - Google Fonts](https://fonts.google.com/specimen/Cal+Sans)
    - Haikei - blob generation app: [haikei.app](https://haikei.app/)
    - SVGrepo - SVG icons library: [svgrepo.com](https://www.svgrepo.com/)

- **APIs**
    - KUTE.js - used to animate blobs: [KUTE.js](https://thednp.github.io/kute.js/)

- **Research tools**
    - ChatGPT: [chatgpt.com](https://chatgpt.com)
    - DeepL: [deepl.com](https://www.deepl.com)
    - And the internet itself.



###### Created by warezoid with the love of freedom and numbers. 🧡