// Gather elements

let main_title = document.getElementById("title_input");
let noun_box = document.getElementById("noun");
let verb_box = document.getElementById("verb");
let adjective_box = document.getElementById("adjective");
let submit_button = document.getElementById("submit_button");
let title = document.getElementById("main_title")
let adlib = document.querySelectorAll("adlib");
let story_result = document.getElementById("story_result");


function add(event) {
    event.preventDefault();
    let userInput_title = main_title.value;
    let userInput_noun = noun_box.value;
    let userInput_verb = verb_box.value;
    let UserInput_adjective = adjective_box.value;

    story_result.innerText = "Last Night I had " + userInput_noun + " and today I had to " + userInput_verb + ". what a " + UserInput_adjective + "day"





}

function updateTitle(event) {
    event.preventDefault();
    let userInput_title = main_title.value;
    title.innerText = userInput_title;

}


main_title.addEventListener("input", updateTitle)
submit_button.addEventListener("click",add )