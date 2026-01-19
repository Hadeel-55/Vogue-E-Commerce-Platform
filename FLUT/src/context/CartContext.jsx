import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() =>{
    const savedCard = localStorage.getItem("cart");
return savedCard ? JSON.parse(savedCard) : [];
    });
  const [favorites, setFavorites] = useState(()=>{
  const saveFavori = localStorage.getItem("favorites");
return  saveFavori ? JSON.parse(saveFavori) : [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevcart) =>
      prevcart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const favoriItems = (product) => {
    setFavorites((prevFavorites) => {
      const exsistingFavoriItem = prevFavorites.find(
        (item) => item.id === product.id
      );
      if (exsistingFavoriItem) {
        return prevFavorites.filter((item) => item.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        updateQuantity,
        removeFromCart,
        favoriItems,
        totalItem,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
