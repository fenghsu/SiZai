import { defineStore } from "pinia";
import productStore from "./productStore.js";

export default defineStore ('cart',{
    state: () => ({
        cart:[]
    }),
    actions: {
        addToCart( productId, qty = 1){
            const currentCart = this.cart.find( (item) => item.productId === productId)
            //console.log( currentCart)
            if(currentCart){
                currentCart.qty += qty
            }else{
                this.cart.push({
                id: new Date().getTime(),
                productId,
                qty
            })
            }
            //console.log(this.cart)
        //console.log(this.cart)
        },
        setCartQty(id, event){
            console.log(id, event)
            const currentCart = this.cart.find((item) => item.id === id)
            currentCart.qty =event.target.value *1
        },
        removeItem(id){
            //取得索引位置
            const index = this.cart.findIndex( (item) =>  item.id === id)
            this.cart.splice(index, 1)
        }
    },
    getters: {
        cartList: ( {cart}) => {
            const { products } = productStore();
            //console.log(products)
            //console.log(cart)
            const carts = cart.map((item) => {
                console.log(item)
                //單一產品取出
                const product = products.find((product) => product.id === item.productId);
                //console.log(product)
                return{
                    ...item,
                    product,
                    subtotal: product.price * item.qty
                }               
            });
            const total = carts.reduce( (a, b) => a + b.subtotal, 0)
            return {
                carts,
                total,
            }
        }
    }
})