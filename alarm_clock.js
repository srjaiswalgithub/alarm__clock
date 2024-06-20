const selectitem = document.querySelectorAll("select");
const timeshow = document.querySelector("h1");
const content = document.querySelector(".content");
const btn = document.querySelector("button");
let tm;
let alarmtime;
var check = false;
let ringalarm = new Audio("bedside-clock-alarm-95792.mp3");
for(var i = 12;i>0;i--){
    i = i<10?"0"+i:i;
    let option = `<option value = "${i}">${i}</option>`
    selectitem[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(var i = 59;i>0;i--){
    i = i<10?"0"+i:i;
    let option = `<option value = "${i}">${i}</option>`
    selectitem[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(var i = 2;i>0;i--){
    n = i==2?"PM":"AM";
    let option = `<option value = "${n}">${n}</option>`
    selectitem[2].firstElementChild.insertAdjacentHTML("afterend",option)
}

setInterval(() => {
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    ap = "AM";
    if(h>=12){
        h = h-12;
        ap = "PM";
    }
    h = h==0?12:h;
    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;
    tm = `${h}:${m}:${s} ${ap}`;
    timeshow.innerText = `${h}:${m}:${s} ${ap}`;
    if(alarmtime==`${h}:${m} ${ap}`){
        ringalarm.play();
        ringalarm.loop = true;
    
    }
    

    
}, 1000);

function setalarm(){
    
    if(check==true){
        content.classList.remove("disabled");
        btn.innerText = "Set Alarm";
        alarmtime = "";
        ringalarm.pause();
        
        return check = false;
         

    }
    alarmtime = `${selectitem[0].value}:${selectitem[1].value} ${selectitem[2].value}`;
    if(alarmtime.includes("Hour") || alarmtime.includes("Minute") || alarmtime.includes("AM/PM")){
        return alert("Please set a valid time!!");
    }

    
    content.classList.add("disabled");
    btn.innerText = "Clear Alarm";
    check = true;

    

}

btn.addEventListener("click",setalarm);

