function timer(deadline){

    function timeRemainer(endTime){
        let a = Date.parse(endTime) - Date.parse(new Date),
            seconds = Math.floor((a/1000) % 60),
            minutes = Math.floor((a/1000/60) % 60),
            hours = Math.floor(a/1000/60/60);
         return {
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            'total' : a 
         }
    };

    let timer = document.getElementById('timer'),
        hours = timer.querySelector('.hours'),
        seconds = timer.querySelector('.seconds'),
        minutes = timer.querySelector('.minutes'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock(){

        let t = timeRemainer(deadline);

        if (t.hours < 10) {
            hours.textContent = '0' + t.hours;
        } else hours.textContent = t.hours;
        if (t.minutes < 10) {
            minutes.textContent = '0' + t.minutes;
        } else minutes.textContent = t.minutes;
        if (t.seconds < 10) {
            seconds.textContent = '0' + t.seconds;
        } else seconds.textContent = t.seconds;
        
        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00'; 
        }
    }
}