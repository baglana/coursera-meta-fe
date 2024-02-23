class Animal {
  talk() {
      console.log("Animal noise");
  }
}

class Dog extends Animal {
  talk() {
      super.talk()
      console.log("Baff baff")
  }
}

class Pug extends Dog {
  talk() {
      console.log("Pug noise");
  }
}

const husky = new Dog();
const myPug = new Pug();
husky.talk();
myPug.talk();