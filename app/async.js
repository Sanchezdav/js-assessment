exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => { resolve(value); }, 250)
    })

    return promise
  },

  manipulateRemoteData: function(url) {
    const promise = new Promise((resolve, reject) => {
      $.get(url, (data) => {
        const people = data.people.map(person => person.name).sort()
        resolve(people)
      })
    })

    return promise
  }
};
