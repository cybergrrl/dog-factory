const dogFactory = function (name, breed, weight) {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },

    set name(newName) {
      if (typeof newName === "string") {
        this._name = newName;
      } else {
        console.log("Pass in a name that is a string");
      }
    },
    set breed(newBreed) {
      if (typeof newBreed === "string") {
        this._breed = newBreed;
      } else {
        console.log("Pass in a new breed as a string");
      }
    },
    set weight(newWeight) {
      if (typeof newWeight === "number") {
        this._weight = newWeight;
      } else {
        console.log("Pass in the new weight as a number");
      }
    },

    bark: function () {
      return "ruff! ruff!";
    },
    eatTooManyTreats: function () {
      this._weight += 1;
    },
  };
};
