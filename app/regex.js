exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
  return /\d/.test(str);
  },

  containsRepeatingLetter : function(str) {
  return (/([a-zA-Z]).*?\1/).test(str);
  },

  endsWithVowel : function(str) {
  return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers : function(str) {
  var myRegexp = /\d{3}/;
  var match = myRegexp.exec(str);
  if (match == null) {
    return false;
  }
  else
   {return match[0];}
  },

  matchesPattern : function(str) {
  return /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(str);
  },

  isUSD : function(str) {
  return /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/.test(str);
  }
};
