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

Describe: Pizza.calculateCost()

Test: "It should display new Pizza object with a size of "medium" and toppings "cheese" and "pepperoni""
Code: 
let pizza = new Pizza("medium", ["cheese", "pepperoni"]); console.log(pizza);
Expected Output: {size: 'small', toppings:}

$$$$$$$$

# _{Pizza Parlor}_

#### By _**{Owen Brown}**_

#### _{This is a web application that lets the user make their pizza based off the menu and get the cost based on their selections}_

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_{The application takes in user input and displays the cost result based on the size and topping options to choose from after clicking the button.}_
* _If 'large' is chosen, that's a $25 flat fee. Any toppings are $0.80 extra per topping_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Open a new tab, drag the HTML document into the blank search bar and hit enter._ 


## Known Bugs

* None

## License

Copyright (c) _January 27th, 2023_ _Owen Brown_