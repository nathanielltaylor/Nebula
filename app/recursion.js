exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Extra Credit
  },

  permute: function(arr) {
    // Extra Credit
  },

  fibonacci: function fibonacci(n) {
    // Required
    // var a = 0, b = 1, f = 1;
    // for(var i = 2; i <= n; i++) {
    //     f = a + b;
    //     a = b;
    //     b = f;
    // }
    // return f;

  //   if (n < 3) {
  //   return 1;
  //   } else {
  //   return fibonacci(n-2) + fibonacci(n-1);
  // }

  if (n < 3) {
	      return 1;
	    } else {
	      return fibonacci(n - 2) + fibonacci(n - 1);
	    }
},

  validParentheses: function(n) {
    // Extra Credit
  }
};
