export const addItemToCart = (existingCartItems, newCartItem) => {
  const existingCartItem = existingCartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );

  if (existingCartItem) {
    return existingCartItems.map((item) =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item.quantity
    );
  } else {
    return [...existingCartItems, { ...newCartItem, quantity: 1 }];
  }
};
