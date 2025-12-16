# warezoid.com
[warezoid.com](https://warezoid.com/) repository serves as repository for my personal portfolio website, which contains several interesting components created according to my own concept.



## Table of content
- [License](#license)
- [Components](#components)
    - [Project slideshow](#project-slideshow)
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
### Project slideshow
Project slideshow is a component used to present a selection of my projects. The content of the component changes at certain intervals, creating the impression of a slideshow.

![Project slideshow](./docs/img/project_slideshow.gif)

#### HTML
Only the content changes in the HTML section. Below you will find the HTML skeleton.

```
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