const item = document.querySelector("#item")
const todolist = document.querySelector("#to-do-list")

item.addEventListener(
    "keyup",
    function(event) {
        if(event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)
var addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("king");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
        )
    
            
    todolist.appendChild(listItem)
}

