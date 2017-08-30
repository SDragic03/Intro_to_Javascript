/**
 * Created by srddrag on 6/30/17.
 */
var passengers = [ ["Thomas", "Meeks"],
    ["Gregg", "Pollack"],
    ["Christine", "Wong"],
    ["Dan", "McGaw"] ];

var modifiedNames = passengers.map( function (arrayCell) {
    return arrayCell.toString();
});


console.log(modifiedNames);

var parkRides =  [ ["Birch", 40], ["PP", 55], ["CC", 20], ["FWoF", 90]];

var fastPassQueue = ["CC", "PP", "Birch", "PP"];

function buildTicket(allRides, passRides, pick) {
    if (passRides[0] == pick) {
        var pass = passRides.shift();
        return function () {alert("Fast pass!");};
    } else {
        for(var i = 0; i < allRides.length; i++) {
            if(allRides[i][0] == pick) {
                return function () {alert("A ticket is printing for..." + allRides[i][1]);};
            }

        }
    }

}

var wantsRide = "PP";
buildTicket(parkRides, fastPassQueue, wantsRide)();
