const vvod = document.querySelector('#vvod');

vvod.addEventListener('keyup', function(a)  {
    const duplicate = document.querySelector('#duplicate');
    duplicate.textContent = a.target.value;
})

const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
    console.log(vvod.value);
    event.preventDefault();

    document.querySelector("input").value = "";
    document.querySelector("#duplicate").innerHTML = "";
})

