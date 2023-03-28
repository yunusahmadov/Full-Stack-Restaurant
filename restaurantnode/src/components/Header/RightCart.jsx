import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../../reduxx/MainReducer'
import {img_path} from "../../Api/MainApi"
function RightCart() {
    const dispatch=useDispatch()
    const cart=useSelector(state=>state.Data.cart)
    const cartManual=useSelector(state=>state.Data.cartManual)
   
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
      );

      useEffect(()=>{
        setCartItems(JSON.parse(localStorage.getItem("cart")) || [])
      }, [cartManual])
      const handleQuantityChange = (id, action) => {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: action === "increment" ? item.quantity + 1 : item.quantity - 1
            };
          }
          return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      };
   

    //closeCart
    function closeCart() {
        dispatch(
            changeStateValue({
                name: 'cart',
                value: false
            })
        )
    }

    //cleara
    function clearCart() {
        localStorage.removeItem('cart')
        setCartItems([])

    }    
    // console.log(cartItems);

    let quant = 0;
    let totalSum = 0;
    if (cartItems==null) {
    }else{
        for (let i = 0; i < cartItems.length; i++) {
            quant += cartItems[i].quantity;
        }
        

        for (let i = 0; i < cartItems.length; i++) {
            totalSum += cartItems[i].quantity * cartItems[i].prodPrice;
        }
    }

  return (
   
    <div className='right-cart'  style={cart?{top:"70px",right:'0px'}:{top:"-500px",right:'0px'}}>
    <i style={{color:"black"}}  id='close' onClick={()=>closeCart()} class="fa-solid fa-xmark"></i>
    <div className="cart-container">
    {
        cartItems.length!=0?
            <div className='clear-text-container'>
                <p>All Quantity: {quant}</p>
                <p>Total Price: {totalSum.toFixed(1)}₼</p>
            </div>:null
    }
    {
                    cartItems.length!=0?
                    cartItems.map((pr,i)=>{
                        return <>
                        {
                            pr.quantity>0?
                            <div className='cart-item' key={i}>
                            <div className="cart-item-text">
                                <p>{pr.prodName}</p>
                                <p> Quantity:{pr.quantity}</p>
                                <p> Price:{pr.prodPrice}</p>
                                    <div className="incdecr-container">
                                    <button onClick={() => handleQuantityChange(pr.id, "increment")}>
                                    +
                                </button>  
                                <button onClick={() => handleQuantityChange(pr.id, "decrement")}>
                                    -
                                </button>
                                    </div>

                            </div>
                            <img src={img_path + pr.prodImg} alt="" />

                        </div>:null
                        }
                        </>
                    }):<>    <p style={{textAlign:'center'}}>Your cart is empty</p></>
              }
    </div>
    {
        cartItems.length!=0?
            <div className='clear-text-container'>
                <button onClick={()=>clearCart()}><i className="fa-solid fa-trash"></i></button>
            </div>:null
    }

    </div>
  )
}

export default RightCart





//with global state
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { changeStateValue } from '../../reduxx/MainReducer'
// import {img_path} from "../../Api/MainApi"
// function RightCart() {
//     const dispatch=useDispatch()
//     const cart=useSelector(state=>state.Data.cart)
//     const testCart=useSelector(state=>state.Data.testCart)

//     // const [items,setItems]=useState([])
    
//     useEffect(()=>{
//     // setItems(JSON.parse(localStorage.getItem('cart')))
//     dispatch(
//         changeStateValue({
//             name: 'testCart',
//             value: (JSON.parse(localStorage.getItem('cart')))
//         })
//     )
//     },[])
//     console.log(testCart);

//     function closeCart() {
//         dispatch(
//             changeStateValue({
//                 name: 'cart',
//                 value: false
//             })
//         )
//     }
//     function clearCart() {
//         localStorage.clear();
//         // setItems([])
//         dispatch(
//             changeStateValue({
//                 name: 'testCart',
//                 value: []
//             })
//         )
//     }
//     function addQuantity() {
//         console.log('salam');
//     }

//     let quant = 0;
//     let totalSum = 0;
//     if (testCart==null) {
//         console.log('cart is empty');
//     }else{
//         for (let i = 0; i < testCart.length; i++) {
//             quant += testCart[i].quantity;
//         }
//         console.log(quant);
        
    
//         for (let i = 0; i < testCart.length; i++) {
//             totalSum += testCart[i].quantity * testCart[i].prodPrice;
//         }
//     }


//   return (
   
//     <div className='right-cart'  style={cart?{right:"0"}:{right:"-500px"}}>
//     <i style={{color:"black"}}  id='close' onClick={()=>closeCart()} class="fa-solid fa-xmark"></i>
//     <div className="cart-container">
//     {
//                     testCart?
//                     testCart.map((test,i)=>{
//                         return <div className='cart-item' key={i}>
//                             <div className="cart-item-text">
//                                 <p>{test.prodName}</p>
//                                 <p> Quantity:{test.quantity}</p>
//                                 <p> Price:{test.prodPrice}</p>

//                                 {/* <button onClick={() =>addQuantity()}>+</button> */}
//                                 {/* <button onClick={()=>minusQuantity()}>-</button> */}

//                             </div>
//                             <img src={img_path + test.prodImg} alt="" />

//                         </div>
//                     }):<>    <p style={{textAlign:'center'}}>Your cart is empty</p></>
//               }
//     </div>
//     {
//         testCart?
//             <div>
//                 <button onClick={()=>clearCart()}>Clear Cart</button>
//                 <p>All Quantity:{quant}</p>
//                 <p>Total Sum:{totalSum}</p>
//             </div>:null


//     }
//     </div>
//   )
// }

// export default RightCart