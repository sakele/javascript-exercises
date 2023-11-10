const findTheOldest = function(arr) {
    function getAge(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }
    return arr.reduce(function(oldest, person) {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(person.yearOfBirth, person.yearOfDeath)
        if (oldestAge < currentAge) {
            oldest = person;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
