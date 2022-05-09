export const addItemToCart = (existingCartItems, newCartItem) => {
  const existingCartItem = existingCartItems.find(
    (cartItem) => cartItem.id === newCartItem.id
  );

  if (existingCartItem) {
    return existingCartItems.map((item) =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...existingCartItems, { ...newCartItem, quantity: 1 }];
  }
};

export const removeCartItem = (existingCartItems, cartItemRemove) => {
  const existingCartItem = existingCartItems.find(
    (cartItem) => cartItem.id === cartItemRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return existingCartItems.filter((item) => item.id !== cartItemRemove.id);
  } else {
    return existingCartItems.map((item) =>
      item.id === cartItemRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
