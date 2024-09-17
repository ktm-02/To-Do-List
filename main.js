const input=document.getElementById("to-do-input");
const btn=document.getElementById("btn");
const list=document.getElementById("To-Do-List")

btn.addEventListener('click',()=>{
    const content=input.value;
    console.log(content);
    if(content){
        const li=document.createElement('li');
        li.classList.add('To-Do-List');
        li.innerHTML=`${content} <button class="btn">Remove</button>`;
        list.appendChild(li);
        input.value='';

        const remove=li.querySelector("button");
        remove.addEventListener('click',()=>{
            list.removeChild(li);
        });
    }
});