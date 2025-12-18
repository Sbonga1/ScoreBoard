let homeCounterLbl = document.getElementById("home-counter")
let awayCounterLbl = document.getElementById("away-counter")
let homeCounter = 0
let awayCounter = 0

function increment(i,t){
    if (t =='home'){
        homeCounter +=i
        console.log(homeCounter)
        homeCounterLbl.textContent = homeCounter
    }
    else{
         awayCounter +=i
         console.log(awayCounter)
         awayCounterLbl.textContent = awayCounter
    }  
}
function resert(){
    homeCounter = 0
    awayCounter = 0
    homeCounterLbl.textContent = 0
    awayCounterLbl.textContent = 0
}