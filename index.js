let container =document.getElementById("container")

window.addEventListener("scroll",()=>{
    setTimeout(()=>{

        loadContent(25)
    },500)
})
loadContent(25)


function loadContent(num){
    let scrollY = window.scrollY
    let innerHeight =window.innerHeight
}