var doCoolStuff = function (){
    var currentClassName = document.getElementByID('cool').className

    if (currentClassName == 'cool') {
        document.getElementByID('cool').className = 'cool red';
    } else{
        document.getElementByID('cool').className = 'cool';
    }
}



var car = {
    make: 'Honda',
    type: 'CRV',
    color: 'grey',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1', 
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],
turnOn: function () {
    this.isTurnedOn = true;
},
fly: function () {
    alert('fly');
},
switchCar: function (isOn) {
    console.log('turn car '+isOn);
    if (isOn == true) {
        this.isTurnedOn = true;
    }
        else{
            this.isTurnedOn = false;
        }
    }
}
;


console.log('hello there friends!');