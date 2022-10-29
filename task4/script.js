const js = document.querySelector('#js');

js.addEventListener ('click', (event) => {
    js.textContent = prompt();
    event.preventDefault();
})

