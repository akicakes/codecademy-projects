const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  
  //gets and sets courses and meals
  get appetizers() {

  },
  set appetizers(newAppies) {

  },
  get mains() {

  },
  set mains(newMains) {

  },
  get desserts() {

  },
  set desserts(newDesserts) {

  },

  //gets _courses property
  get courses() {
    return {
      appetizers: this.appetizers, mains: this.mains, desserts: this.desserts
    };
  },

  //adds a new dish to the specified course on the menu
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    //pushes the dish object to the appropriate arrray in the menu based on which course name was passed in
    this._courses[courseName].push(dish);
  },

  //function which gets a random dish from a course on the menu
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return this._courses[courseName][randomIndex];
  },
  
  //funciton generates three-course meal
  generateRandomMeal: function() {
  let appetizer = this.getRandomDishFromCourse('appetizers');
  let main = this.getRandomDishFromCourse('mains');
  let dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} for a total of $${totalPrice}.`;
  }
}; 

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Bruschetta', 6.00);
menu.addDishToCourse('appetizers', 'Nachoes', 5.50);
menu.addDishToCourse('mains', 'Chicken Club Sandwich', 12.00);
menu.addDishToCourse('mains', 'Coconut Curry', 11.50);
menu.addDishToCourse('mains', 'Katsudon', 9.50);
menu.addDishToCourse('desserts', 'Strawberry Shortcake', 4.25);
menu.addDishToCourse('desserts', 'Soft Serve Ice Cream', 2.00);
menu.addDishToCourse('desserts', 'Cheesecake', 5.25);

let meal = menu.generateRandomMeal();
console.log(meal);
