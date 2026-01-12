const icon = document.getElementById("heart-icon")
const author = document.getElementById("footer-author-name")

const formatRgb = (rgb) => {
    return (
        rgb
        .replaceAll(" ", "")
        .replace("rgb(", "")
        .replace(")", "")
        .split(",")
        .map(Number)
    )
        
}

const toHex = ([r, g, b]) => {
    return (
        [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("")
    )
}

const setIcon = () => {
    let rgb = formatRgb(getComputedStyle(author).color)
    let iconCode = `&#129505;`
    
    switch(toHex(rgb)){
        case "ec6116":
            break;
        case "b5179e":
            iconCode = `&#128156;`
            break;
        case "c9184a":
            iconCode = `&#x1fa77;`
            break;
        case "3cbe00":
            iconCode = `&#128154;`
            break;
        case "00b4d8":
            iconCode = `&#128153;`
            break;
    }

    icon.innerHTML = iconCode
}

setIcon()