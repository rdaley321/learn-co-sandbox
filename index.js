const person = {
  name: "Awesome Name",
  ocupation: {
    title: "Senior Manger of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  },{
    kind: "cat",
    name: "Ralph"
  }]
};

function find(array, criteriaFn) {
  let current = array;
  let next= [];
  while (current) {
    if(criteriaFn(current)) {
      return current;
    }
    if(Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift();
  }
  return null;
}