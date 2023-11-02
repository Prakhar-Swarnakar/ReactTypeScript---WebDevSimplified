import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};
type cartItem = {
  id: number;
  quantity: number;
};
const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, SetCartItems] = useState<cartItem[]>([]); // initial value as emply array
  //give the stateful value and a function to update the value
  //the the returned value us a array of cartItem

  function getItemQuantity(id: number) {
    cartItems.find((item) => item.id === id)?.quantity || 0;
    //in cartItems find where
    // if it exist then give its qunatity or 0
  }

  function increaseCartQuantity(id: number) {
    SetCartItems((currCartItems) => {
      //return currentItem such that
      if (currCartItems.find((item) => item.id === id) == null) {
        return [...currCartItems, { id, quantity: 1 }];
        //return array with all the current item and a new item
      } else {
        return currCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    SetCartItems((currCartItems) =>{
      return currCartItems.filter((item) => item.id !== id); 
      //how do we know that this will be a list of cart items whereas 
      //above it will give a single item
      //doubt: why curr item is being used ... ask
  });
  }

  function decreaseCartQuantity(id: number) {
    SetCartItems((currItem) => {
      //return currentItem such that
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
        //return array with all the current item and a new item
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
