// strings - flat text javascript stores and processes

"This is a string"

// Concatenation

"This is " + "a string"

"This is a string with a number " + 42

"Platform " + 9 + " and " + 3/4 // Expressions get evaluated!
// "Platform 9 and 0.75"

"Platform " + 9 + " and 3/4" // Make strings out of expressions that you want to see their original format!
// "Platform 9 and 3/4"

// Special characters inside strings

"Flight #:\t921\t\tSeat:\t21C" // Advance to the next tab stop
// "Flight  #:   921        Seat:   21C"

"Login Password: \t\t\"C3P3@21\""
// "Login Password:     "C3P3@21""

// Backslash notation
"Origin\\Destination:\tOrlando(MCO)\\London(LHR)"
// "Origin\Destination: Orlando(MCO)\London(LHR)"

// newline notation
"Departure:\t06:55A\nArrival:\t14:55P"
//"Departure:   06:55A
// Arrival:     14:55P"

// string comparision

//Double equals will compare EXACT contents
"The Wright Brothers" == "The Wright Brothers" // = true;

"The Wright Brothers" != "Super Mario Brothers" // = false;

// Javascript is case sensitive
"The Wright Brothers" != "the wright brothers" // = true; // Case counts!

// The length of strings

"words".length // = 5

// Spaces and any non-alphabetic characters are counted too
"One Fish, Two Fish, Red Fish, Blue Fish".length // = 39



