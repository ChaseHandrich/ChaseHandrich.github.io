 const hours = new Date().getHours() // get the current hour
 
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
const welcome = document.querySelector('#welcome')
welcome.textContent = isMorning ? "Good Morning" : isAfternoon ? "Good Afternoon" : "Good Evening"

localStorage.setItem("It's a secret to everybody.",'This is a zelda reference')