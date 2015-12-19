module.exports = pigLatinTranslator;

var pigLatinTranslator = (function() {
  var module = {};
  var vowels = ["A","a","E", "e","I", "i", "O", "o", "U","u"];

  function isVowel(letter) {
    if (vowels.indexOf(letter) === -1) {
      return false;
    } else {
      return true;
    }
  }

  module.toPigLatin = function (sentence) {
    var array = sentence.split(" ");
    for (var i=0; i < array.length; i++) {
      var letters = array[i].split("");
      for (var k = 0; k < letters.length; k++){
        if (isVowel(letters[k])) {
          if (k === 0) {
            letters.push("-","a","y");
            array.splice(i, 1, letters.join(""));
            break;
          }
          var front = letters.splice(0, k).join("");
          letters.push("-",front,"a","y");
          array.splice(i, 1, letters.join(""));
          break;
        }
      }
    }
    return array.join(" ");
  };

  module.toEnglish = function (sentence) {
    var array = sentence.split(" ");
    for (var i=0; i < array.length; i++) {
      var letters = array[i].split("");
      for (var k = 0; k < letters.length; k++){
        if (letters[k] === "-") {
          var back = letters.splice(k, letters.length);
          back.shift();
          back.pop();
          back.pop();
          letters = back.concat(letters);
          array.splice(i, 1, letters.join(""));
          break;
        }
      }
    }
    return array.join(" ");
  };

  return module;
})();

console.log(pigLatinTranslator.toPigLatin("Hope it works from English to Pig Latin"));
console.log(pigLatinTranslator.toEnglish("ope-hay it-ay orks-way ile-whay"));