import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
//import React from "react";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/FormatCurrency";
import storeItems from "../data/item.json"

type ShoppingCartProps = {
    isOpen : boolean
}
export function ShoppingCart({isOpen}: ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show = {isOpen} onHide ={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap = {3}>
                {cartItems.map(item =>(
                    <CartItem key = {item.id} {...item} />
                ))}
            </Stack>
            <div className="ms-auto fw-bold fs-5">
            {formatCurrency(cartItems.reduce((total, cartItem) => {
                    const cartItemData = storeItems.find(item => item.id === cartItem.id);
                    return total + (cartItemData?.price || 0) * cartItem.quantity;
                    }, 0)
                )}
            </div> 
        </Offcanvas.Body>
    </Offcanvas>
}