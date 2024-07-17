let btn=document.querySelector('button')
let lsit=document.querySelector('ol')
 
btn.addEventListener('click',()=>{
    let inp=document.querySelector('input').value

    let newli=document.createElement('li')
    lsit.appendChild(newli)
    newli.textContent=inp


})