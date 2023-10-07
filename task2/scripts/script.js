const modal = document.querySelector(".modal");
const images = document.querySelector(".gallery");
const date = document.querySelector(".date");

const counter = document.querySelector(".images-counter");

counter.innerText = `Количество картинок на странице: ${images.children.length}`
const starttDate = new Date();
date.innerText = `${starttDate.toLocaleDateString('en-GB')}   ${starttDate.getHours()} : ${starttDate.getMinutes()}`;

setInterval(()=>{
    const currentDate = new Date();
    date.innerText = `${currentDate.toLocaleDateString('en-GB')}   ${currentDate.getHours()} : ${currentDate.getMinutes()}`;
    
},1000)







images.addEventListener("click", (e) => {
    
    if(e.target.nodeName ==="IMG"){
        modal.classList.toggle("is-hidden")
        const src=e.target.getAttribute("src");
        modal.firstElementChild.setAttribute("src",src);
    }
});


modal.addEventListener('click',(e)=>{
    modal.classList.toggle("is-hidden")
})

