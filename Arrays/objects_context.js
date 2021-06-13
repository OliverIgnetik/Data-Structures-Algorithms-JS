// context : What is the environment? What is to the left of the dot?
// in HTML this === window
// so you can call this.alert('hello')
console.log('INSIDE THE MODULE');
console.log(this, '\n');

// changing the context of this
const object = {
  level: 3,
  ammunition: 1000,
  hello: function () {
    // print out this
    console.log(this, '\n');
  },
};

console.log('INSIDE AN OBJECT');
object.hello();

// instantiation and context
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    console.log('[Player constructor]', this);
  }
  // parent method
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

// inheritance where the Wizard is a subclass of Player
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('A Wizard has been created');
  }
  play() {
    console.log(`The Wizard, ${this.name}, uses a spell`);
  }
  // the interface is the same but there is some added functionality
  introduce() {
    super.introduce();
    console.log('I will turn you into a frog');
  }
}

// instantiate new objects
// expect to see some logs in the console from the player constructors
const player1 = new Player('Shelly', 'Warrior');
const wizard2 = new Wizard('Shaun', 'Wizard');

console.log('\n');

// call object methods
player1.introduce();
console.log('\n');
wizard2.introduce();
console.log('\n');
