exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(element => {
      return () => { return fn(element) }
    })
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3)
    }
  },

  useArguments: function() {
    return [...arguments].reduce((a, b) => a + b);
  },

  callIt: function(fn) {
    return fn.apply(fn, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      let args2 = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, args2);
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function(currentArgument) {
        accumulatedArguments.push(currentArgument);

        let allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;
        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }
    return getArgumentAccumulator([], fn.length);
  }
};
