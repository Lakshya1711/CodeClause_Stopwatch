let [millisecond, second, minute, hour] = [0,0,0,0];
let timeRef = document.querySelector(".display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [millisecond, second, minute, hour] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

function displayTimer() {
    millisecond += 10;
    if(millisecond == 1000) {
        millisecond = 0;
        second++;
        if(second == 60) {
            second = 0;
            minute++;
            if(minute == 60) {
                minute = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = 
        millisecond < 10
        ? "00" + millisecond
        : millisecond < 100
        ? "0" + millisecond
        : millisecond;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

} 