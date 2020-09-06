// context : What is the environment? What is to the left of the dot?
// in HTML this === window
// so you can call this.alert('hello')
console.log('INSIDE THE MODULE');
console.log(this);

// changing the context of this
const object = {
  level: 3,
  ammunition: 1000,
  hello: function () {
    // print out this
    console.log(this);
  },
};

console.log('INSIDE AN OBJECT');
object.hello();

// instantiation and context
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    console.log('player', this);
  }
  // public fields syntax
  introduce = () => {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  };
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`The Wizard, ${this.name}, uses a spell`);
  }
}

// instantiate new objects
// expect to see some logs in the console from the player constructors
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');

console.log('\n');

// call object methods
wizard1.introduce();
wizard1.play();
console.log('\n');
wizard2.introduce();
wizard2.play();
