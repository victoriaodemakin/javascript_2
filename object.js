const users = {
  usersName: ["ryu", "yoshi", "becky"],
  usersEmail: ["ryu@gmail.com", "yoshi@gmail.com", "becky@gmail.com"],
  login: function () {
    console.log(`${this.usersEmail[1]} has logged in`);
  },
};
users.login();
users.usersName[0] = "shaun";
console.log(users.usersName[0]);
console.log(users.usersName);

//CLASS CONSTRUCTOR
// a constructiv function contruct an objec or create a new user object

class AllUser {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
    // it sets the value of this to be email to the new empty object, the object created her is sthe email and name object which is set to this keyword
  }
  //method is created
  login() {
    console.log(`${this.email} has logged in`);
    return this;
  }
  logout() {
    console.log(`${this.email} has logged out`);
    return this;
  }
  updateScore() {
    this.score++;
    console.log(
      `${this.email} has logged in and his score is now ${this.score}`
    );
    return this;
  }
}

class Admin extends AllUser {

  deleteOld(user) {
    //the user you want to delete
    newUser = newUser.filter(u => {
      return u.email != user.email;
      // that is if the every u in main user = user email pssed in the main parameter
    });
  }
}
// IT IS A FUNCTION THAT Fires whwn we want to crate a new user object

const userOne = new AllUser("ray@user.com", "ray"); //it will look for the class alluser
const userTwo = new AllUser("ray@user.com", "ray");
const userThree = new AllUser("tipper@user.com", "tipper");
const userFour = new AllUser("jayson@user.com", "jayson");
const userFive = new AllUser("ghon@user.com", "ghon");

console.log(userOne);
console.log(userOne.updateScore());
const newAdmin = new Admin("jayson@user.com", "jay");

const newUser = [userTwo, userThree, userFour, userFive];
newAdmin.deleteOld(userThree);
//method chainning
userOne.login().updateScore().updateScore().updateScore().logout();

//new keyword
// - create a new empty object {}
// - set the value of 'this' to be the new empty object
//- calls the contructor method

//CLASS METHOD

// ///CLASESS
// //classes is used to create  one or more object.objects are the ones used by program,
// //instance properties eg name,height,age // instance method is what they do
// //instance method will use an instance properties to achieve their result

// class Rectangle {
//   constructor(width, color, height) {
//     // you can  make the contructor accept value and they are assaigned to the new object created
//     // the instance property is defined in the constructor

//     this.width = width;
//     this.color = color;
//     this.height = height;

//     console.log("my rectangle is being created");

//     //this is a keyword that referene to the current object being created
//   } //a constructor is method ran once during the the live of the object. it is ran when the object is created it is method

//   //INSTANCE METHOD ARE DEFINED OUTSIDE THE CONSTRUCTOR
//   //used the created object to perorm something
//   getArea() {
//     return this.width * this.height;
//   }
//   printDesc() {
//     console.log(
//       `i am a ${this.width} width, ${this.height} tall and ${this.color}`
//     );
//   }
// }
// let myRectangle = new Rectangle(5, "red", 6); //this will call the contructor method
// let myRectangle1 = new Rectangle(50, "blue", 16);
// //this creates a new object in refrence to the the rectangle claass

// console.log(myRectangle.getArea());
// console.log(myRectangle1.printDesc());

// //GETTER AND SETTER

// //they are used to defined method on an a class and used as proprties

// class Square {
//   constructor(width, height) {
//     // you can  make the contructor accept value and they are assaigned to the new object created
//     // the instance property is defined in the constructor
//     this.width = width;
//     this.height = height;
//     this.numberOfRequest = 0;

//     //this is a keyword that referene to the current object being created
//   }
//   get area() {
//     this.numberOfRequest++;
//     return this.width * this.height;
//   }
//   set area(perimeter) {
//     this.width = Math.sqrt(perimeter);
//     this.height = this.width;
//   } //it takes just one parameter
//   // where the perimeter parameters i 36 which has been defied below
//   //getter can turn a method into a property
// }
// let Square1 = new Square(50, 6);
// console.log(Square1.area); // instaead of puttting it in a meyhod and addidng () we dont add cause it trates it like a property
// Square1.area = 36;
// console.log(Square1.area);
// console.log(Square1.area);
// console.log(Square1.area);
// console.log(Square1.area);
// console.log(Square1.numberOfRequest);
// console.log(Square1.width);

// //SETTER
// // It is like a getter, new value can be assigned to a new instance property

// //STATIC METHOD

// //AS STATIC METHOD IS DEFINED ON A CLASS BUT IT DOESNT REQUIRE AN INSTANE OF CLAS TO BE CREATED TO BE USED. THERE IS NO OBJECT TO THREM

// class Circle {
//   constructor(width, height) {
//     // you can  make the contructor accept value and they are assaigned to the new object created
//     // the instance property is defined in the constructor
//     this.width = width;
//     this.height = height;

//     //this is a keyword that referene to the current object being created
//   }
//   static equals(a, b) {
//     return a.width * a.height === b.width * b.width;
//   }
//   static isValid(dimension1, dimension2) {
//     return dimension1 === dimension2;
//   }

//   //it compare the two condition , it take 2 parameter
// }
// let circle1 = new Circle(6, 7);
// let circle2 = new Circle(8, 8);
// let circle3 = new Circle(9, 7); //it used the main class and not an instances

// console.log(circle1);
// console.log(Circle.equals(circle2, circle3));
// console.log(Circle.isValid(6, 6));

// //INHERITANCE
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   describe() {
//     console.log(`i am ${this.name} and i am ${this.age} years old`);
//   }
// }

// // a child class is created to inherit from the person class
// class Programmer extends Person {
//   constructor(name, age, skills, work, yearsofexperience) {
//     //call rhe parent constructor
//     super(name, age);
//     //custom behaviours of the programmer class
//     this.skills = skills;
//     this.work = work;
//     this.yearsofexperience = yearsofexperience;
//   }

//   code() {
//     console.log(
//       `${this.name} has the best ${this.skills} and ${this.yearsofexperience} years of experience`
//     );
//   }
// }

// const allProgrammers = [
//   new Programmer("tolani", "29", "java", "none", 12),
//   new Programmer("zoe", "21", "javascript", "none", 12),
//   new Programmer("lala", "19", "html", "none", 12),
// ]; //a new objects in some array

// allProgrammers.forEach((programmer) => {
//   console.log(programmer.code());
// });
// const newUser = new Person("tola", 23);
// const newProgrammer1 = new Programmer("tolani", "29", "java", "none", 12); // it takes the name and age parrameters from the person class
// console.log(newUser);
// console.log(newProgrammer1);
// console.log(newProgrammer1.code());
// console.log(newProgrammer1.describe());

// //CLASS POLYMERISM
// // it the act of redefinding a method inside the child class of a parent

// class Animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   } // an instance property

//   //an instance method
//   makeSound() {
//     console.log(
//       `the generic sounds of ${this.color} ${this.name} are different`
//     );
//   }
// }

// class Allanimal extends Animal {
//   constructor(name, color, sounds) {
//     super(name, color);
//     this.sounds = sounds;
//   }

//   makeSound() {
//     super.makeSound(); // it brings the generic make sound
//     console.log(
//       `the generic sounds of ${this.color} ${this.name} are different, they make ${this.sounds}`
//     );
//   }
//   //polymerism
// }

// const typeOfAnimals = new Animal("dog", "brown"); // for the animals sounds

// const specialAnimal = new Allanimal("johnny", "brown", "Hoof hoof");
// typeOfAnimals.makeSound(); //calling method
// specialAnimal.makeSound();

// //EXAMPLE
// const myList = document.querySelector("#myList");
// //LIST BLINDING JS
// class ListBinding {
//   constructor(element) {
//     this.listElement = element; //this is the list element that will be passed into the main html
//     this.textList = []; // will be filled with the list
//   }

//   //MAKES AN LI ELEMENT
//   static createListItem(text) {
//     const li = document.createElement("li");
//     li.textContent = text;
//     return li;
//   }

//   update() {
//     //remove all existing li element
//     while (this.listElement.firstChild) {
//       this.listElement.removeChild(this.listElement.firstChild);
//     }
//     // fill ul tag with li
//     this.textList.forEach((text) => {
//       this.listElement.appendChild(ListBinding.createListItem(text));
//     });
//   } //it will update the physical list element with the items in text list

//   //add element
//   add(text) {
//     this.textList.push(text);
//     this.update();
//   }

//   //remove item
//   remove(index) {
//     this.textList.splice(index, 1);
//     this.update();
//   }
// }

// // my list element will be passed into the construcor

// const listBind = new ListBinding(myList);

// console.log(listBind.update());
// console.log(listBind.add("decode"));
// console.log(listBind.remove("decode"));
