const endDate = "06 May 2023 11:36 PM";

document.getElementById("end-date")
    .innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const difference = (end - now) / 1000;
    console.log(difference);
    if(difference<0){
        return;
    }
    inputs[0].value = Math.floor(difference / 3600 / 24); //convert into days
    inputs[1].value = Math.floor((difference / 3600) % 24); //convert into hours
    inputs[2].value = Math.floor((difference / 60) % 60); ////convert into minutes
    inputs[3].value = Math.floor(difference % 60); //convert into seconds
}
clock();//initial call

setInterval(
    () => {
        clock()
    }, 1000
)
/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */







console.log(Date());