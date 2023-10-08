const modal = document.querySelector(".modal");
const images = document.querySelector(".gallery");
const date = document.querySelector(".date");


//--------------КОЛИЧЕСТВО КАРТИНОК------------------------------------------
const counter = document.querySelector(".images-counter");
counter.innerText = `Количество картинок на странице: ${images.children.length}`
//---------------------------------------------------------------------------


//------------ВРЕМЯ-----------------------------------------------------------
function updateTime (){
    const currentDate = new Date();
    date.innerText = `${currentDate.toLocaleDateString('en-GB')}   ${currentDate.getHours()} : ${currentDate.getMinutes()}`;
}
setInterval(updateTime,1000)
//----------------------------------------------------------------------------


//----------------------ГАЛЕРЕЯ------------------------------------------------
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
//-----------------------------------------------------------------------------
