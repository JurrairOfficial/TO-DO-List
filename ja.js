const inputtext = document.querySelector("#inputtext");
const btn       = document.querySelector("#btn");
const todoList  = document.querySelector("#todoList");





const addtodo =  ()=>{
    
    const inputbox = inputtext.value.trim();
    if(inputbox.length <= 0 ){
        alert("you must enter some thing");
        return false;
    
    }
    const li = document.createElement("li");
    const p  = document.createElement("p");
    p.innerHTML = inputbox;
    li.appendChild(p);
    todoList.appendChild(li);
    inputtext.value = "";
    
    const deletbutton     = document.createElement("deletbutton");
    deletbutton.innerText = "Remove";
    deletbutton.classList.add("deletbutton");
    li.appendChild(deletbutton);

    const editbutton     = document.createElement("editbutton");
    editbutton.innerText = "Edit";
    editbutton.classList.add("editbutton");
    li.appendChild(editbutton);







}

btn.addEventListener('click', addtodo);
