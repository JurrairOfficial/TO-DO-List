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
    // Create the deletbutton
    const deletbutton     = document.createElement("deletbutton");
    deletbutton.innerText = "Remove";
    deletbutton.classList.add("deletbutton");
    li.appendChild(deletbutton);

    // Create the edit button
    const editbutton     = document.createElement("editbutton");
    editbutton.innerText = "Edit";
    editbutton.classList.add("editbutton");
    li.appendChild(editbutton);


    
}

const updatetodo = (e)=>{
    // console.log(e.target.innerHTML);
    if(e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement);

    }
    if(e.target.innerHTML === "Edit"){
        inputtext.value = e.target.previousElementSibling.innerHTML;

    }

}



btn.addEventListener('click', addtodo);
todoList.addEventListener('click', updatetodo)



