import { createContext, useState, useEffect } from "react";
export const FavoriteContext = createContext();
export const FavoriteProvider = ({ children }) => {





      const [favorites, setFavorites] = useState(()=>{
  const saveFavori = localStorage.getItem("favorites");
return  saveFavori ? JSON.parse(saveFavori) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);


  const addToCart = (product) => {
    setFavorites((prevCart) => {
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


  const removeFromFavorite = (productId) => {
    setFavorites((prevCart) => prevCart.filter((item) => item.id !== productId));
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




      return (
        <FavoriteContext.Provider
          value={{
            favorites,
            addToCart,
           removeFromFavorite,
            favoriItems,
   
          }}
        >
          {children}
        </FavoriteContext.Provider>
      );
    };