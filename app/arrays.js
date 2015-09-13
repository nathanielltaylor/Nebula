exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    while (arr.indexOf(item) != -1) {
    arr.splice(arr.indexOf(item), 1)
    };
    return arr;
  },

  append : function(arr, item) {
    arr.splice((arr.length + 1), 1, item);
    return arr;
  },

  truncate : function(arr) {
   arr.pop();
   return arr;
  },

  prepend : function(arr, item) {
   arr.unshift(item);
   return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var occurences = $.grep(arr, function (elem) {
      return elem === item;
    }).length;
  return occurences;
  },

  duplicates : function(arr) {
  //   var sorted_arr = arr.sort();
  //  var results = [];
  //  for (var i = 0; i <= arr.length - 1; i++) {
  //      if (sorted_arr[i + 1] == sorted_arr[i]) {
  //          results.push(sorted_arr[i]);
  //      }
  //  }
  //  return(results);
  var i, out = [], obj = {};

  for (i=0;i<arr.length;i++) {
    if (obj[arr[i]]===undefined) {
      obj[arr[i]]=1;
    } else {
      obj[arr[i]]++;
    }
  }

  for (i in obj) {
    if (obj[i] > 1) {
      out.push(Number(i));
    }
  }

  return out;
  },

  square : function(arr) {
    ret= [];
       for (var i = 0, len = arr.length; i < len; i++) {
           ret.push(arr[i] * arr[i]);
       }
       return ret;
  },

  findAllOccurrences : function(arr, target) {
    var indexes = []
       for(var i = 0; i < arr.length; i++)
           if (arr[i] === target)
               indexes.push(i);
       return indexes;
  }
};
