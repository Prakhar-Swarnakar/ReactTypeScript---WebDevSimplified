import { Button, Stack } from "react-bootstrap"
import storeItems from "../data/item.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import React from "react"
import { formatCurrency } from "../utilities/FormatCurrency"

type CartItemProps = {
    id : number
    quantity : number
}
export function CartItem({id,quantity}: CartItemProps){
    const {removeFromCart, cartItems} = useShoppingCart()
    const item = storeItems.find(i => i.id === id) 
    if(item == null) return null
    return(
        <Stack direction = "horizontal" gap ={2} 
            className="d-flex align-items-center">
            <img 
                src = {item.imgUrl} 
                alt = {item.name} 
                height = "75px" 
                style = {{objectFit : "cover"}}/>  
            <div className="me-auto">
                <div>
                    {item.name}{" "} 
                    {quantity > 1 && (<span className="text-muted"
                        style={{fontSize:".65rem"}}>x{quantity}</span>
                    )}
                </div>
            </div>  
            <div className="text-muted" style={{fontSize: ".75rem"}}>
                {formatCurrency(item.price)}
            </div> 
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>
                &times; 
            </Button>
            {/*
            <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {
                    formatCurrency( cartItems.reduce((total,cartItems) => {
                        const item = storeItems.find(i => i.id === cartItems.id)
                        return total + (item.price || 0) * cartItems.quantity
                        } ,0) 
                    )
                }
            </div>
            */}
            <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const cartItemData = storeItems.find(i => i.id === cartItem.id);
                    return total + (cartItemData?.price || 0) * cartItem.quantity;
                    }, 0)
                )}
            </div>
        </Stack>
    )
}