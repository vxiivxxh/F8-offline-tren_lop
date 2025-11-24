const items= document.querySelectorAll("ul li");
items.forEach(()=>{
    const btn= items.querySelector("button");
    btn.addEvenListenrt()
})