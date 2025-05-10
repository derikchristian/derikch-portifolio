const userLang = navigator.language || navigator.userLanguage
let currentLang = "en"

// takes an object and uses it key-value pairs to replace the page text
function translatePage(data){
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n")
        if(data[key] !== ""){
            element.textContent=data[key]
        }
    })
}

function changeLang(lang){
    fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
        translatePage(data)
        localStorage.setItem("lang",lang)
        currentLang = lang
    })
}

document.getElementById("english").addEventListener("click", () => {
    if(currentLang !== "en"){
        changeLang("en")
    }
})

document.getElementById("portuguese").addEventListener("click", () => {
    if(currentLang !== "pt"){
        changeLang("pt")
    }
})

if(localStorage.getItem("lang") !== "en" && localStorage.getItem("lang") !== null && localStorage.getItem("lang") !== ""){
    changeLang(localStorage.getItem("lang"))
}else if(userLang){
    if(userLang && userLang.split('-')[0] === "pt"){
        changeLang("pt")
    }
}