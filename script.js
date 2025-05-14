const sortear = document.querySelector("button")



function generatenumber() {
    const numbermin = Math.ceil(document.querySelector(".min").value)
    const numbermax = Math.floor(document.querySelector(".max").value)
    
    const result = Math.floor(Math.random() * (numbermax - numbermin + 1)) + numbermin;

    alert(result)
}


sortear.addEventListener("click", generatenumber)