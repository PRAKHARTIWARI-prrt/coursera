(function (window){
  const speakhello={};
  const speak="Hello";
  speakhello.a=function(name){
    console.log(speak+""+name)
  };
  window.speakhello=speakhello;
  const byeSpeaker = {};
  const speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);
