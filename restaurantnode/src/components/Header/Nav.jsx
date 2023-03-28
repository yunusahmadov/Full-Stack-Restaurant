import React from 'react'
import Logo from './Logo'
import { useDispatch, useSelector} from 'react-redux';
import { changeStateValue } from '../../reduxx/MainReducer';
import './HeaderResponsive.css'


function Nav() {
  const nav=useSelector(state=>state.Data.nav)
  const menu=useSelector(state=>state.Data.menu)
  const testCart=useSelector(state=>state.Data.testCart)

const dispatch=useDispatch()
  const handleClickScroll = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScrollHome = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
function openMenu() {
  dispatch(
    changeStateValue({
        name: 'menu',
        value: true
    })
)
}
function openCart() {
  dispatch(
    changeStateValue({
        name: 'cart',
        value: true
    })
)
dispatch(
  changeStateValue({
      name: 'testCart',
      value: (JSON.parse(localStorage.getItem('cart')))
  })
)
}


  return (
    <div className="navigate" style={nav ? { background: 'white',position:'fixed',height:'80px' } : { background: 'none' }}>
        <Logo/>
        <div className="nav-right">
        <nav>
            <ul >
                <button className='menu-btn'  onClick={handleClickScrollHome} style={nav ? { color: 'black' } : { color: 'white' }}>Home</button>
                <button className='menu-btn' onClick={handleClickScroll} style={nav ? { color: 'black' } : { color: 'white' }}>Menu</button>
            </ul>
        </nav>
        </div>
        <div className="menu">
        <i onClick={()=>openCart()} class="fa-solid fa-cart-shopping"  style={nav ? { color: 'black' } : { color: 'white' }}></i>
        <i onClick={()=>openMenu()} class="fa-solid fa-bars" style={nav ? { color: 'black' } : { color: 'white' }}></i>
        </div>

    </div>
  )
}

export default Nav