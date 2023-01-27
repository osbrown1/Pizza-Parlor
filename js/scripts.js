// Pizza object constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// Prototype method to calculate the cost of a pizza
Pizza.prototype.calculateCost = function() {
  let cost = 0;
  let toppingCost = 0.50;
  
  // Add cost for size
  if (this.size === "small") {
    cost += 10;
  } else if (this.size === "medium") {
    cost += 12;
  } else if (this.size === "large") {
    cost += 14;
  }

// Add cost for toppings
  for (let i = 0; i < this.toppings.length; i++) {
    cost += toppingCost;
  }

  return cost;
}

function calculateCost() {
  // Get size and toppings from form
  const size = document.getElementById("size").value;
  const toppings = document.getElementsByName("toppings");
  let selectedToppings = [];

  // Add selected toppings to array
  for (let i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      selectedToppings.push(toppings[i].value);
    }
  }



