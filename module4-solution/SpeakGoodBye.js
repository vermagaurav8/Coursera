// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

(function (names) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var greeting = "Hello";
  var firstLetter = "J";
  var nameswithJ = [];
  {
  // console.log(greeting + names);   
  }
  for (var i = 0; i < names.length; i++) {
    var namefirstLetter = names[i].charAt(0);
    if (namefirstLetter === firstLetter) {
      console.log("Good Bye ",   names[i]);
      nameswithJ.push(names[i]);
    } 
    else{
      console.log("Hello ",   names[i]);
    }
  }
  return nameswithJ;
})();


//   for (var i = 0; i < names.length; i++) {
//     var firstLetter = names[i].charAt(0).toLowerCase();
//     if (firstLetter === "J") {
//       firstLetter.charAt(names[i]);
//     } else {
//      greeting.toLowerCase([i]);
//     }
//   }


// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2


// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var byeSpeaker =

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
//var speakWord = "Good Bye";

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
//function speak(name) {
 // console.log(speakWord + " " + name);
//}

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
