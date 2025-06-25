const header = document.querySelector("header");
const aOnNav = document.querySelectorAll("header nav a");
const githubIconOnHeader = document.querySelector("header .github i");
const h2OnHeader = document.querySelector(".site-title h2")
const languageSeparator = document.querySelector("#language-separator")
const nav = document.querySelector("nav")
const navButton = document.querySelector("header button")

const aboutButtons = document.querySelectorAll("#about .buttons button")
const aboutTexts = document.querySelectorAll("#about .folder p")

const spyedSections = document.querySelectorAll("section.spyed")
const spyNavs= document.querySelectorAll("header nav ul li a")

// tracking if header is being hovered
let headerHovered = false;

header.addEventListener("mouseenter", () => {
    headerHovered = true;
})
header.addEventListener("mouseleave", () => {
    headerHovered = false;
})

// handle the header and elements color changing
window.addEventListener("scroll", () => {
    if(!headerHovered){    
        if(window.scrollY > 10){
            header.classList.add("white-background");
            githubIconOnHeader.classList.add("black");
            h2OnHeader.classList.add("blue");
            languageSeparator.classList.add("black-border")
            aOnNav.forEach( a => {
                a.classList.add("black");
            })
            navButton.classList.add("black")
        }else{
            header.classList.remove("white-background");
            githubIconOnHeader.classList.remove("black");
            h2OnHeader.classList.remove("blue");
            languageSeparator.classList.remove("black-border")
            aOnNav.forEach( a => {
                a.classList.remove("black");
            })
            navButton.classList.remove("black")
        }
    }
})


//  handle the about selector 

function changeActive(i){
    aboutTexts.forEach(text => {
        text.classList.add("deactive");
    })
    aboutButtons.forEach(button => {
        button.classList.remove("blue-background");
    })
    aboutTexts[i].classList.remove("deactive");
    aboutButtons[i].classList.add("blue-background");
}

// just a anonimous function would not work here!

for(let i = 0; i < aboutButtons.length; i++){
    aboutButtons[i].addEventListener("click", () => changeActive(i));
}

// handles the nav underlines that show where you are in the page

const spyNavObserver = new IntersectionObserver(observedSections => {
    observedSections.forEach(section => {
        if(section.isIntersecting){
            spyNavs.forEach(navA => {
                navA.classList.remove("spy");
                if(navA.getAttribute("href") === `#${section.target.getAttribute("id")}`){
                    navA.classList.add("spy")
                }
            })
        }
    })
},{
    root: null,
    threshold: 0.005,
    rootMargin: '-50% -40% -40% -40% ',
})

spyedSections.forEach(section => spyNavObserver.observe(section))

// handles the nav button functionality 
navButton.addEventListener("click", () => {
    if(nav.classList.contains("revealed")){
        nav.classList.remove("revealed");
    }else nav.classList.add("revealed")
});