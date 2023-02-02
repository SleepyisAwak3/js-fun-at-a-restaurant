function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
}

function createMenuItem(menuItemName, price, type) {
  var item = {
    name: `${menuItemName}`,
    price: `${price}`,
    type: `${type}`
  }
  return item
}
function addIngredients(string,ingredients) {
  if (ingredients.includes(string) !== true ) { 
    ingredients.push(string) 
    }  
}
function formatPrice(price,) {
  return `$${price}`
}
function decreasePrice(price) {
    return price * .9;
  }
function createRecipe(title, ingredients, type) {
return {
  title,
  ingredients,
  type,
  }
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


