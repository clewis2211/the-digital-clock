function dateTime(){
   let newDate = new Date();
   let toHour = newDate.getHours();
   let toMinutes = newDate.getMinutes();
   let toSeconds = newDate.getSeconds();
   let toTime = newDate.toLocaleTimeString();
   let session = 'AM';

    if(toHour.toString().length == 1){
        toHour = '0'+toHour
    }

    if(toHour.toString().length > 12){
        toHour = toHour - 12;
        session = 'PM'
    }

    if(toMinutes.toString().length == 1) {
        toMinutes = '0'+toMinutes
    }

   if(toSeconds.toString().length == 1) {
        toSeconds = '0'+toSeconds
   } 

   let allTime = toHour +":"+ toMinutes +":"+toSeconds + session;
   return allTime;

}


setInterval(function(){
        let currentTime = dateTime();
        document.getElementById('time').innerHTML = currentTime;
    }, 1000);



