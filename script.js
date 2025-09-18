


const para = document.getElementById("para")
const para1 = document.getElementById("puch")


function hello(){

    const pi = fetch("https://official-joke-api.appspot.com/random_joke");

pi

    .then(data=>data.json())

    .then(realdata=>{

        para.innerText= `setup  : ${realdata.setup}` ;
        console.log(realdata.setup)
        para1.innerText =`punchline : ${realdata.punchline}`;
        console.log(realdata.punchline)
        
    })
    .catch(error=>console.log(error))

    }
