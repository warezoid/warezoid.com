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

let filterSettings = {
    type: {
        "software": true,
        "3d printing": true,
        "IoT": true
    },
    date: {
        "2024": true,
        "2025": true,
        "2026": true
    }
}

const renderProjects = () => {
    projectOverview.innerHTML = ""

    allProjects.forEach((oneProject) => {
        if(oneProject.active){
            projectOverview.innerHTML += `
                <a href="${oneProject.link_url}" ${oneProject.link_params}>
                    <div class="one-project" style="background-image: url(${oneProject.link_background});">
                        <div class="one-project-toolbar">
                            <p>${oneProject.type}.</p>
                            <p>${oneProject.date}</p>
                        </div>

                        <div class="one-project-text">
                            <h3>${oneProject.project_name}</h3>
                            <p>${oneProject.project_desc}</p>
                        </div>
                    </div>
                </a>
            `
        }
    })
}
renderProjects()

const updateProjects = () => {
    for(let i = 0; i < allProjects.length; i++){
        let oneProject = allProjects[i]

        if(filterSettings.type[oneProject.type]) {
            if(filterSettings.date[oneProject.date]){
                oneProject.active = true
                continue
            }
        }

        oneProject.active = false
    }
    
    renderProjects()
}





//filter
const webpage = document.getElementById("webpage")
const filterPopup = document.getElementById("filter-popup")
const filterBtn = document.getElementById("filter-buttons")
const filterCloseBtn = document.getElementById("close-button")

const checkboxSoftware = document.getElementById("type-software")
const checkbox3dprinting = document.getElementById("type-3dprinting")
const checkboxIot = document.getElementById("type-iot")
const checkbox2024 = document.getElementById("date-2024")
const checkbox2025 = document.getElementById("date-2025")
const checkbox2026 = document.getElementById("date-2026")

const setCheckbox = () => {
    checkboxSoftware.checked = filterSettings.type["software"]
    checkbox3dprinting.checked = filterSettings.type["3d printing"]
    checkboxIot.checked = filterSettings.type["IoT"]
    checkbox2024.checked = filterSettings.date["2024"]
    checkbox2025.checked = filterSettings.date["2025"]
    checkbox2026.checked = filterSettings.date["2026"]
}

const loadCheckbox = () => {
    filterSettings.type["software"] = checkboxSoftware.checked
    filterSettings.type["3d printing"] = checkbox3dprinting.checked
    filterSettings.type["IoT"] = checkboxIot.checked
    filterSettings.date["2024"] = checkbox2024.checked
    filterSettings.date["2025"] = checkbox2025.checked
    filterSettings.date["2026"] = checkbox2026.checked

    updateProjects()
}

filterBtn.addEventListener("click", () => {
    setCheckbox()

    filterPopup.style.display = "flex"
    webpage.classList.add("blured")
})
filterCloseBtn.addEventListener("click", () => {
    loadCheckbox()

    filterPopup.style.display = "none"
    webpage.classList.remove("blured")
})










/* Created by warezoid with the love of freedom and numbers. */