// setInterval
// console.log("script start");

// setInterval(()=>{
//     // console.log(Math.floor(Math.random()*256))
// },1000)

// console.log("script end");

const myname = document.querySelector("a");

const body = document.body;
const currentColor = document.querySelector("span");
const currentColorBtn = document.querySelector(".current")
const stop = document.querySelector(".actionBtns button");

const refreshBtn = document.createElement("button");
refreshBtn.textContent = "Refresh Page";
refreshBtn.classList.add('stop')
const action = document.querySelector(".actionBtns");

action.append(refreshBtn);

const IntervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red},${green},${blue})`;
    currentColor.textContent = rgb;
    body.style.backgroundColor = rgb;
    stop.style.color = rgb;
    refreshBtn.style.color = rgb;
    myname.style.color = rgb;
    currentColorBtn.style.color = rgb;
    currentColor.style.color = "initial"
}, 1000);

stop.addEventListener("click",()=>{
    clearInterval(IntervalId);
    stop.textContent = body.style.backgroundColor;
})

refreshBtn.addEventListener("click",()=>{
    location.reload();
})