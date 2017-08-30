function assignTorpedo(name, passengerArray) {

    for(var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name ) {
            return function() {
                alert("ahoy, " + name + "!\n" +
                        "man your post at torpedo #" + (i+1) + "!");
            };
        }
    }
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);

giveAssignment();



function makeTorpedoAssigner(passengerArray) {

            return function(name) {
                for(var i = 0; i < passengerArray.length; i++) {
                    if(passengerArray[i] == name) {
                        alert("ahoy, " + name + "!\n" +
                            "man your post at torpedo #" + (i + 1) + "!");
                    }
                }
            };
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var getTorpedoFor = makeTorpedoAssigner(subPassengers);

getTorpedoFor("Chewie");