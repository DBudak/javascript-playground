const biologicalEntity = {
  species: 'homo sapiens'
};

const male = Object.create(biologicalEntity);
male.sex = 'male';

console.log(male.species); // homo sapiens
console.log(male.sex); // male