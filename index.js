const title = document.querySelector("#title");

function handleClick() {
    title.innerHTML = "wow this is JS!!";
}

title.addEventListener("click", handleClick)
