// Gather elements

let main_title = document.getElementById("title_input");
let noun_box = document.getElementById("noun");
let verb_box = document.getElementById("verb");
let adjective_box = document.getElementById("adjective");
let submit_button = document.getElementById("submit_button");
let title = document.getElementById("main_title")
let adlib = document.querySelectorAll("adlib");
let story_result;
let userInput_noun;
let userInput_verb;
let UserInput_adjective;
let userInput_title;

function storeUserInput(event) {
    event.preventDefault();
    console.log(main_title.value);
    userInput_noun = noun_box.value;
    userInput_verb = verb_box.value;
    UserInput_adjective = adjective_box.value;
    userInput_title = main_title.value;
    if (userInput_noun == "" || userInput_verb == "" || UserInput_adjective == "" || userInput_title =="") {
        alert("You need to fill the inputs")
        return;
    }

    story_result = "Last Night I had " + userInput_noun + " and today I had to " + userInput_verb + ". what a " + UserInput_adjective + "day"

    clearContent()
    showStoryResult()



}

function updateTitle(event) {
    event.preventDefault();
    let userInput_title_update = main_title.value;
    title.innerText = userInput_title_update;
    

}

function showStoryResult() {
    document.body.innerHTML = "<h1>" + userInput_title + "</h1><h3>" + story_result + "</h3>"
    document.body.style.textAlign = "center"
    
    


}

function clearContent() {
    document.body.innerHTML = '';
}


main_title.addEventListener("input", updateTitle);
submit_button.addEventListener("click", storeUserInput )

