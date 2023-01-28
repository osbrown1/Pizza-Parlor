Describe: Pizza()

Test: "It should display object with properties and console.log by typing 'Pizza'"
Code: 
this.size = size;
this.toppings = toppings;
Expected Output: Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  console.log('Pizza object is created')
}

Test: "It should display new Pizza object with a size of "medium" and toppings "cheese" and "pepperoni""
Code: 
let pizza = new Pizza("medium", ["cheese", "pepperoni"]); console.log(pizza);
Expected Output: {size: 'small', toppings:}
