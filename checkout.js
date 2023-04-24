const shoppingCart = [
    { id: 1, name: 'Item 1', price: 10.99, quantity: 1 },
    { id: 2, name: 'Item 2', price: 5.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 15.99, quantity: 1 },
  ];
  
  function calculateTotalCost(cart) {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }
  
  const totalCost = calculateTotalCost(shoppingCart);
  console.log('Total cost:', totalCost.toFixed(2));