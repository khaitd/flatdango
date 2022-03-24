
let request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()

    // Displaying info for the first movie using javascript 
    let img = document.getElementById("poster"); 
    img.setAttribute('src', res[0].poster)

    let title = document.getElementById("title"); 
    title.innerText = res[0].title

    let runTime = document.getElementById("runtime");
    runTime.innerText = `${res[0].runtime} minutes`

    let showTime = document.getElementById("showtime");
    showTime.innerText = res[0].showtime

    let ticketNum = document.getElementById("ticket-num");
    ticketNum.innerText = res[0].capacity - res[0].tickets_sold

    let filmInfo = document.getElementById("film-info");
    filmInfo.innerText = res[0].description
    

    // Writng the code that will create the list of movies 
     res.forEach((el) => {
        let movie = document.createElement('li');
        movie.innerHTML = el.title.toUpperCase();
        let list = document.getElementById("films")
        list.appendChild(movie)
     })

    // Adding EventListner to decrease available ticket amount till 0
        document.getElementById("buy-ticket").addEventListener("click", () => {
            let ticketNum = document.getElementById("ticket-num");
            if (parseInt(ticketNum.innerText) > 0 ){ 
               ticketNum.innerText = parseInt(ticketNum.innerText) - 1
            }        
     })

}

request()