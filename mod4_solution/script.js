// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:

// Hello Yaakov
// Good Bye John
// Good Bye Jen
// Good Bye Jason
// Hello Paul
// Hello Frank
// Hello Larry
// Hello Paula
// // Hello Laura
// Good Bye Jim
for ( var name in names) {
	if (names[name][0]=="J"|"j"){
		console.log(byeSpeaker.speak(names[name]));
	}
	else{
		console.log(helloSpeaker.speak(names[name]));
	}
}