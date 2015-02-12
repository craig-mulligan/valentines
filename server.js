var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');
var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://valentines.firebaseio.com/");
var text = 'Say hello to my little friend';
var url = 'http://translate.google.com/translate_tts?tl=en&q=' + encodeURIComponent(text);
ref.child("SEXCAVE").on("value", function(snap) {
  if (snap.val() == "true") {
    request(url).pipe(new Lame.Decoder).pipe(new Speaker);
    console.log("true")
  } else {
  	console.log("false")
  }
})






