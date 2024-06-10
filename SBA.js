const btnEl = document.getElementById("smt")
const title = document.getElementById("inputTitle")
const ulistEl = document.querySelector("h3")

function handleSubmit(evt){
    evt.preventDefault()
    const inputValue = title.value
    ulistEl.appendChild(document.createElement("li")).textContent = inputValue;
}

btnEl.addEventListener("click", handleSubmit)