let container =document.getElementById("container")

container.addEventListener("scroll",()=>{
    setTimeout(()=>{

        if(container.scrollHeight -container.scrollTop -container.clientHeight <1){
            loadContent()

        }
    },800)
})

let count=1
loadContent()
// let scrollY = window.scrollY
// let innerHeight =window.innerHeight
// let offsetHeight =document.body.offsetHeight

// if(scrollY + innerHeight> offsetHeight-100){
   
// }
function loadContent(){

    
        let item =1
        let div = document.createElement("div")
    
       while(item<=25){
            let h3 =document.createElement("h3")
            h3.innerText ="Masai School   " +count
            div.append(h3)
            container.append(div)
            count++
            item++
        }
    
}