let input = document.getElementById("search-input");
let listwrapper = document.getElementById("listWrapper");

let taskAdded = () =>{
    if(input.value === ""){
        alert("You must have to add task.")
    }
    else{
        let list = document.createElement("li");
        list.classList.add("listItems")
        list.innerHTML = input.value;
        listwrapper.appendChild(list);
        // let crossIcon = document.createElement("span");
        // crossIcon.classList.add("cancelIcon")
        // list.appendChild("crossIcon");
    }
    input.value = ""
}