var timer = null;
var countdownNumber = 10;

setTimeout(function (){
    location.href='rocket.html';
}, 2000);

var changeState = function (state) {
    document.body.className = 'body-state'+state; 
    clearInterval(timer);
    countdownNumber = 10;
    document.getElementById('countdown').innerHTML = countdownNumber;


    if (state == 2){
        timer = setInterval(function () {
            countdownNumber = countdownNumber - 1;
            document.getElementById('countdown').innerHTML = countdownNumber;
            
            if (countdownNumber > 3 && countdownNumber <= 5) {
				// be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else{
				document.getElementById('nervous').className = 'nervous';
			}

			if (countdownNumber > 6 && countdownNumber <= 8) {
				// to the moon
				document.getElementById('moon').className = 'moon show';
			} else {
				document.getElementById('moon').className = 'moon';
			}
        
        if (countdownNumber <= 0){
            changeState(3);
        }
        }, 500);
    } else if (state == 3){
        var success = setTimeout(function ()
        {
            var randomNumber = Math.round(Math.random()*10);
            console.log('randomNumber:', randomNumber)
            //success
            if (randomNumber > 1) {
                changeState(4);
            }
            //failure
            else {
                changeState(5); //oh no!
            }
        }, 2000);
    }
}