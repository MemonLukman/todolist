var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; // reset input field

    //Start strikethrough
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);
    // End Strikethrough

    //Start ADD DELETE button
    var dButton = document.createElement("button");
    dButton.appendChild(document.createTextNode("X"));
    li.appendChild(dButton);
    dButton.addEventListener("click", deleteListItem);
    // END ADD DELETE button

    function deleteListItem() {
        li.classList.add("delete");
    }
}

function addListAfterClick() {
    if(inputLength > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if(inputLength > 0 && event.which == 13) { 
    //13 is the enter key's keycode
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);





