let input = document.getElementById("search-input");
let listwrapper = document.getElementById("listWrapper");
let button = document.getElementById("btn");

let taskAdded = () =>{
    if(input.value === ""){
        alert("You must have to add task.")
    }
    else{
        let list = document.createElement("li");
        list.classList.add("listItems")
        list.innerHTML = input.value;
        listwrapper.appendChild(list);
        let crossIcon = document.createElement("span");
        crossIcon.classList.add("cancelIcon")
        crossIcon.innerHTML = "&#10006"
        list.appendChild(crossIcon);
    }
    input.value = "";
    listData();
}

listwrapper.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        listData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        listData();
    }
})

let listData = () =>{
    localStorage.setItem("data",listwrapper.innerHTML);
}

let showData = () =>{
    listwrapper.innerHTML = localStorage.getItem("data");
}
showData();