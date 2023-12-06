import { Button, Stack } from "react-bootstrap"
import storeItems from "../data/item.json"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/FormatCurrency"

type CartItemProps = {
    id : number
    quantity : number
}
export function CartItem({id,quantity}: CartItemProps){
    const {removeFromCart, cartItems} = useShoppingCart()
    const item = storeItems.find(i => i.id === id) 
    if(item == null) return (
        <div>
            Item not found
        </div>
    )
    return(
    <div>
        <Stack direction = "horizontal" gap ={2} 
            className="d-flex align-items-center">
            <img 
                src = {item.imgUrl} 
                alt = {item.name} 
                height = "75px"
                width = "75px" 
                style = {{objectFit : "cover"}}/>  
            <div className="me-auto">
                <div>
                    {item.name}{" "} 
                    {quantity > 1 && (<span className="text-muted"
                        style={{fontSize:".65rem"}}>x{quantity}</span>
                    )}
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div> 
            </div>  
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>
                &times; 
            </Button>
        </Stack>
        <hr/>
    </div>
    )
}