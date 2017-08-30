/**
 * Created by srddrag on 6/30/17.
 */

function buildCoveTicketMaker(transport) {
    return function (name) {
        alert("Here is your transportation ticket via the " + transport + ".\n" +
                "Welcome to the Cold Closure Cove, " + name + "!");
    }
}

var getSubTicket = buildCoveTicketMaker("Submarine");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");

getSubTicket("Sam Smith");
getBattleshipTicket("Junior");
getGiantSeagullTicket("Jill");

