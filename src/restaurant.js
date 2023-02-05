function createRestaurant(name) {
  return {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
  if (restaurant.menus[item.type].includes(item)) return;

  restaurant.menus[item.type].push(item);
}


function removeMenuItem(restaurant, itemName, type) {
  if (!itemExists(restaurant, itemName)) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
  
  var typeArr = restaurant.menus[type];
  var item = typeArr.find(item => item.itemName === itemName);
  var itemIdx = typeArr.indexOf(item);
  
  typeArr.splice(itemIdx, 1);
  
  return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
}

function itemExists(restaurant, itemName) {
  var menus = restaurant.menus;
  var exists = false;
  
  for (type in menus) {
    if (menus[type].find(item => item.name === itemName)) {
      exists = true;
    }
  }

  return exists;
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}