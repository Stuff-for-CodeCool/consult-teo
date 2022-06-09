//  This is the form
const form = document.querySelector("form");
//  This is the main element
const main = document.querySelector("main");

//  This is the submission function
async function formular(event) {
    //  Prevent page refresh
    event.preventDefault();

    //  Get value of element called 'text'
    const value = event.target.text.value;

    //  Do a fetch
    //  using form 'action' attribute
    const request = await fetch(event.target.action, {
        method: "POST", //  Make it a POST request
        headers: { "Content-Type": "application/json" }, //  Force it to be JSON
        //  Convert object into string
        body: JSON.stringify({
            text: value,
        }),
    });

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

//  Here we listen for a form submission
form.addEventListener("submit", formular);
