function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length === 3) return 

  deliveryOrders.push(order); 
}

function refundOrder(orderNumber, deliveryOrders) {
  let orderIdx = deliveryOrders.findIndex(order => { 
    return order.orderNumber === orderNumber;
  });

  deliveryOrders.splice(orderIdx, 1);
}

function listItems(deliveryOrders) {
  return deliveryOrders.map( order => order.item ).join(', ');
}

function searchOrder(deliveryOrders, item) {
  return deliveryOrders.map( order => order.item ).includes(item);
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}