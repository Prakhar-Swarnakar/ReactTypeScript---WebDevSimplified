import { createContext, useContext, ReactNode, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

interface ShoppingCartContext {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: ()=>void
  closeCart: ()=>void 
  cartQuantity: number
  cartItems : CartItem[]
};
type CartItem = {
  id: number;
  quantity: number;
};
const shoppingCartContext: ShoppingCartContext = {
  getItemQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  openCart: () => {},
  closeCart: () => {},
  cartQuantity: 0,
  cartItems: []
};
const ShoppingCartContext = createContext<ShoppingCartContext>(shoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// export const useShoppingCart = () => React.useContext(ShoppingCartContext);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  //const [cartItems, SetCartItems] = useState<CartItem[]>([]); // initial value as emply array
  //give the stateful value and a function to update the value
  //the the returned value us a array of cartItem
  const [isOpen,setIsOpen] = useState(false);
  const [cartItems, SetCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]); // initial value as shopping cart
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  
  function getItemQuantity(id: number): number {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
    //in cartItems find where
    // if it exist then give its qunatity or 0
  }

  function increaseCartQuantity(id: number) : void {
    SetCartItems((currCartItems) => {
      //return currentItem such that
      if (currCartItems.find((item) => item.id === id) == null) {
        return [...currCartItems, { id, quantity: 1 }];
        //return array with all the current item and add a new item with quantity as 1
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

  function removeFromCart(id: number) : void {
    SetCartItems((currCartItems) =>{
      return currCartItems.filter((item) => item.id !== id); 
      //how do we know that this will be a list of cart items whereas 
      //above it will give a single item
      //doubt: why curr item is being used ... ask
    });
  }

  function decreaseCartQuantity(id: number): void {
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

  const cartQuantity = cartItems.reduce( //uses the reduce method to get the total quantity
    (quantity,item)=>item.quantity + quantity, 0 //sets the initial value to 0
  )

 const value = { 
      getItemQuantity,
      increaseCartQuantity, 
      decreaseCartQuantity, 
      removeFromCart,
      cartItems,
      cartQuantity,
      openCart,
      closeCart
    }

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
      <ShoppingCart isOpen ={isOpen}/>
    </ShoppingCartContext.Provider>
  );
}
