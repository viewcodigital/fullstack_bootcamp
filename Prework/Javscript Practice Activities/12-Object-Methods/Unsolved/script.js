const selectedPet = 'Lulu';

const shelter = {
  dogs: ['Mackie', 'Bernice', 'Cookie Monster', 'Spot'],
  cats: ['Astrid', 'Lulu', 'Fluffy', 'Mouser'],
  apptMessage: function () {
    console.log(
      'Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.'
    );
  },
};

// TODO: Debug the code below
const dogMessage = function () {
  console.log(
    `Congrats! ${selectedPet.Lulu}, a great dog, is available for adoption!`
  );
  apptMessage();
};

const catMessage = function () {
  console.log(
    `Congrats! ${selectedPet}, an awesome cat, is available for adoption!`
  );
  shelter.apptMessage;
};

if (dogs.includes(selectedPet)) {
  dogMessage();
} else if (cats.includes(selectedPet)) {
  catMessage();
} else {
  console.log('It looks like the pet is not available.');
  console.log(
    `Check out our featured dog, ${shelter[0]}. or our featured cat, ${cat.shelter[0]}!`
  );
}
