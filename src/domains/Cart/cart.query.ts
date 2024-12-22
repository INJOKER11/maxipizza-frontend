export const CART_QUERY_KEY = 'cart';

export const cartQuery = {
  queryKey: [CART_QUERY_KEY],
  queryFn: () => getItems(),
};

export const getItems = () => {
  const stored = localStorage.getItem('cart');
  return stored ? JSON.parse(stored) : {};
};

export const setItem = (id: number, price: number, count: number) => {
  const currentCart = getItems();
  if (count === 0) {
    const {[id]: _, ...cart} = currentCart;
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    const updatedCart = {
      ...currentCart,
      [id]: {price: price, count: count},
    };
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }
  return getItems();
};
