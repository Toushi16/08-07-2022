const formEl = document.querySelector(".book-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".book-list"); 

const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    const inputValue = inputEl.value;
    const searchFormatted = inputValue.replaceAll("","+");
    const apiURL = `${BASE_API_URL}/${searchFormatted}`;
    
    fetch(apiURL)
    .then((response) => {
        const json = response.json();
        return json;
    })
    .then((json) => {
        listEl.innerHTML = json.docs.map((el) => {
            return `<li><img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Book_PNG2116.png">${el.title}</li>`;
        }).join("");
    });
});