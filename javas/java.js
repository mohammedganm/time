function showTime(){

    'use strict';

    var now =new Date(),
     hours =now.getHours(),
     minutes = now.getMinutes(),
     seconds = now.getSeconds();

     console.log(now);
     console.log(hours);
     console.log(minutes);
     console.log(seconds);

     document.getElementById('clock').textContent = hours + ';' + minutes + ';' + seconds ;
     
}

window.onload = function(){

    'use strict';

    setInterval(showTime, 500);
}

