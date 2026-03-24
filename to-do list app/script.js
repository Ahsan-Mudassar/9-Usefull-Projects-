let inputbox = document.querySelector("#input-box");

let list = document.querySelector("#todo-list");

let addbtn = document.querySelector("#add-btn");


addbtn?.addEventListener("click", addTask)
    

function saveTodos(){
    localStorage.setItem("list",JSON.stringify(list));
};

function addTask() {

    
    if(!inputbox) return;
    
    const taskText =inputbox.value;
    if (taskText === "") return;
    

        const li = document.createElement("li");
        li.innerHTML = taskText;
        list?.appendChild(li);
        /** @type {HTMLInputElement} */ (inputbox).value = "";
        saveTodos();

        const delbtn = document.createElement("button");
        delbtn.innerText = "❎";
        
        delbtn.onclick =()=> {
            li.remove();
            saveTodos();
        }
        
        li.appendChild(delbtn);

        li.addEventListener("click", ()=> {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.5";
        saveTodos();
    });
}
