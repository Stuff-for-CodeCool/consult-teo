const main = document.querySelector("main");
const button = document.querySelector("form + button");
const form = document.querySelector("form");

function baleet(event) {
    event.preventDefault();
    event.target.closest("li").remove();
}

function makeLista(obj) {
    let ul = document.querySelector("main > ul");

    if (!ul) {
        ul = document.createElement("ul");
        main.appendChild(ul);
    }

    for (let i = 0; i < obj.page; i++) {
        const li = document.createElement("li");
        li.innerText = obj.text;

        const del = document.createElement("button");
        del.innerHTML = "&times;";
        del.addEventListener("click", baleet);

        li.insertAdjacentElement("beforeend", del);

        ul.appendChild(li);
    }
}

async function loader(event) {
    event.preventDefault();

    const request = await fetch("/pagina/3");

    if (request.ok) {
        const response = await request.json();
        makeLista(response);
    }
}

button.addEventListener("click", loader);

async function poster(event) {
    event.preventDefault();
    let text = event.target.text.value;

    const request = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text,
        }),
    });

    if (request.ok) {
        const response = await request.json();
        main.innerText = response.mesaj;
    }

    console.log(request);
}

form.addEventListener("submit", poster);
