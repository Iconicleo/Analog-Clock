// "use strict"
// function showTime(){

    setInterval(() => {
        let d = new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();
        hrotation = 30*htime + mtime/2;
        mrotation = 6*mtime;
        srotation = 6*stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        min.style.transform = `rotate(${mrotation}deg)`;
        sec.style.transform = `rotate(${srotation}deg)`;
    }, 1000);
    
// }


// function showTime(){
//     let date = new Date();
//     document.querySelector("h2").innerHTML=date;

//     let hour = date.getHours(); min=date.getMinutes();sec=date.getSeconds();
//     document.querySelector("#sec").style.transform=`rotate(${sec*6-90}deg)`
//     document.querySelector("#min").style.transform=`rotate(${min*6-90}deg)`
//     document.querySelector("#hour").style.transform =`rotate(${hour*30-90+min/2}deg)`
// }
// showTime();
// setInterval(showTime,1000)