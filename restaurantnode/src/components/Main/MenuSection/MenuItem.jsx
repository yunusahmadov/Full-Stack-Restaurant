import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { img_path } from '../../../Api/MainApi'
import { changeStateValue } from '../../../reduxx/MainReducer';


function MenuItem({name='',price='',type_id='',ingredients='',image='',itemId=''}) {

  const cartManual=useSelector(state=>state.Data.cartManual)

// const [inc, setInc] = useState(0)
const dispatch = useDispatch()
  const addToCart = (itemId) => {
    let x = cartManual;
    x++;
    // setInc(x)
    dispatch(changeStateValue({
      name: 'cartManual',
      value: x
    }))
    
    // получаем текущую корзину из LocalStorage или создаем новую
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    // проверяем, есть ли уже элемент в корзине
    const itemInCart = currentCart.find((item) => item.id === itemId);
    if (itemInCart) {
      // если элемент уже есть в корзине, увеличиваем его количество на 1
      itemInCart.quantity++;
    } else {
      // если элемента еще нет в корзине, добавляем его со значением quantity = 1
      currentCart.push({ prodName:type_id, id: itemId, quantity: 1,prodImg:image,prodPrice:price });
    }
  
    // сохраняем изменения в LocalStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
  };
  const [imgState,setImgState]=useState(false)

 function imageZoom() {
  setImgState(true)
 }
 function closeImg() {
  setImgState(false)
 }
  return (
    <div className="menu-item">
      {
        
        <div className='menu-img-container'>
          <img src={img_path + image} alt="" />
          <i onClick={(e) => imageZoom(e)} class="fa-solid fa-magnifying-glass-plus"></i>
        </div>
        }
        {
          imgState?
          <div className='imageWindow'>
          <div className="image-window-back">
          <i  onClick={(e)=>closeImg(e)} className="fa-solid fa-xmark bagla"></i>

          <img src={img_path + image} alt="" />
          {
              type_id !== '' ?
                  <h3 className='name'>{type_id}</h3> : null
          }
          {
              ingredients !== '' ?
                  <p className='ingredients' >{ingredients}</p> : null
          }
          
          </div>
        </div>:null
        }
          {
              type_id !== '' ?
                  <h3 className='name'>{type_id}</h3> : null
          }
          {
              ingredients !== '' ?
                  <p className='ingredients' >{ingredients}</p> : null
          }
          {
              price !== '' ?
                  <h3><span>{price}₼</span></h3> : null
          }
          <button className='add-to-cart' onClick={() => addToCart(itemId)}>Add To Cart</button>
          
    </div>
  )
}

export default MenuItem