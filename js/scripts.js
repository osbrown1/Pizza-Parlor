// Pizza object constructor
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
console.log(poo);

// Prototype method to calculate the cost of a pizza
Pizza.prototype.calculateCost = function() {
  var cost = 0;
  var toppingCost = 0.50;

  // Add cost for size
  if (this.size === "small") {
    cost += 10;
  } else if (this.size === "medium") {
    cost += 12;
  } else if (this.size === "large") {
    cost += 14;
  }}
  