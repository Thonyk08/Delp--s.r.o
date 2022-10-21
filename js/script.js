const prew = document.querySelectorAll(".prew");
const tiles = document.querySelectorAll(".tile");
const port = document.querySelector(".portfolio");
const exit = document.querySelectorAll(".exit");


tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
        console.log(tile.classList, index)
        port.classList.add("hidden")
        prew[index].classList.remove("hidden")
    })
})

exit.forEach((ext, index)=> {
    ext.addEventListener("click", () => {

        port.classList.remove("hidden")
        prew[index].classList.add("hidden")
    })
})


