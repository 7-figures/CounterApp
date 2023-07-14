
let count = 0
let countEl = document.getElementById("count_people") 

let saveEl= document.getElementById("save-el")



function increment() {
    count += 1;
   countEl.textContent = count
}
function save() {
    let previousEn =  count + " - "
    saveEl.textContent += previousEn
    countEl.textContent = 0;
    count = 0;

}

function total() {
   
}

/*let userName = "per"

let message = " You have three new notifications"
let messageToUser = message  +  ", " + userName
console.log(messageToUser)
//console.log(notification +  ", " + userName + " !");*/


/* let welcomeEl = document.getElementById("welcome-el")
 let userName = "Deinmodei Igonifagha"
 let Message = " Welcome back to the office! "
 welcomeEl.innerText =  userName + Message
 welcomeEl.innerText =  welcomeEl.innerText */
