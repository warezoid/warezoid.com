const currentDate = document.getElementById("current-date")

let year = new Date().getFullYear()
currentDate.innerHTML = `${year}`