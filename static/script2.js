//  This is the form
const form = document.querySelector("form");
//  This is the main element
const main = document.querySelector("main");
//  The list items
const lis = document.querySelectorAll("ul > li");

//  This is the submission function
async function formular(event) {
    //  Prevent page refresh
    event.preventDefault();

    //  Get value of element called 'text'
    const value = event.target.text.value;

    //  Extract options into separate object
    const options = {
        method: "POST", //  Make it a POST request
        headers: { "Content-Type": "application/json" }, //  Force it to be JSON
        //  Convert object into string
        body: JSON.stringify({
            text: value,
        }),
    };

    //  Do a fetch
    //  using form 'action' attribute
    const request = await fetch(event.target.action, options);

    //  Request was fine
    if (request.ok) {
        //  Convert response into JSON
        const response = await request.json();
        //  Add text to main element
        main.innerText = response.mesaj;
    } else {
        //  Request was not fine
        console.error("S-a petrecut o chestie nasoala");
    }
}

//  The list item fetch
async function lista(event) {
    //  Do nothing
    event.preventDefault();
    //  Get the ID from the dataset
    const id = event.target.dataset.loopIndex;

    //  Notice lack of configuration object
    const request = await fetch(`/chestie/${id}`);

    if (request.ok) {
        //  Convert to JSON
        const response = await request.json();
        //  Add text to main element
        main.innerText = response.mesaj;
    } else {
        //  Request was not fine
        console.error("S-a petrecut o chestie nasoala");
    }
}

//  Here we listen for a form submission
form.addEventListener("submit", formular);
//  Here we listen for a click
lis.forEach((li) => li.addEventListener("click", lista));
