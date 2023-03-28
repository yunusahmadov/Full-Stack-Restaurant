import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../../reduxx/MainReducer'
import yunuswhitelogo from '../../images/logowhite.png'
function RightMenu() {
    const dispatch=useDispatch()
    const menu=useSelector(state=>state.Data.menu)

    function closeMenu() {
        dispatch(
            changeStateValue({
                name: 'menu',
                value: false
            })
        )
    }
    // console.log(menu);

  return (
    <div className="right-menu" style={menu?{right:"0"}:{right:"-500px"}}>
    <i  id='close'  onClick={()=>closeMenu()} class="fa-solid fa-xmark"></i>
    <div className="right-menu-items">
        <img src={yunuswhitelogo} alt="" />
        <div className="right-menu-items-text">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
        <p>+387648592568</p>
        <p>savory@example.com</p>
        <p>Eighth Avenue 487, New York</p>
        </div>
    </div>
    </div>
  )
}

export default RightMenu