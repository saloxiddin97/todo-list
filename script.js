let btn=document.querySelector('button')
let lsit=document.querySelector('ol')
 
btn.addEventListener('click',()=>{
    let inp=document.querySelector('input').value
 if(inp ===''){
    alert('write something')
 }else{
    let newli=document.createElement('li')
    lsit.appendChild(newli)
    newli.textContent=inp


let newSpan =document.createElement('span')
newSpan.innerHTML="\u00d7";
newli.appendChild(newSpan)

 }
})
let ul=document.querySelector('ol')

ul.addEventListener('click',(e)=>{
    if(e.target.tagName ==='SPAN'){
e.target.parentElement.remove()
    }
})