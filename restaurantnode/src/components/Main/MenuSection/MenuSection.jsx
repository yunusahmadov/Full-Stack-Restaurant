import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getfoodByType, getFoods, getFoodType } from '../../../action/MainAction'
import MenuItem from './MenuItem'
import './menuSection.css'
import './MenuResponsive.css'
import { changeStateValue } from '../../../reduxx/MainReducer'



function MenuSection({foodTypePr}) {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getFoods())
        dispatch(getFoodType())
    },[])

    const foods=useSelector(state=>state.Data.foods)
    const foodType=useSelector(state=>state.Data.foodType)
    const foodByType=useSelector(state=>state.Data.foodByType)

    const [foodTypeId,setFoodType]=useState(foodTypePr)
    const [foodId,senFoodId]=useState('')


    function selectFoodType(e) {
        if(e.target.value != ''){
        dispatch(getfoodByType(e.target.value))
        }else{
            dispatch(
                changeStateValue({
                    name: 'foodByType',
                    value: ''
                })
            )
        }
    }
    // console.log(foods);

    // console.log(items);
  return (
      <div className='menu-section' id="menu">
          <h2>OUR MENU</h2>
          <div className='menu-container'>
              <select value={foodTypeId} onChange={(e) => selectFoodType(e)}>
                  <option value=''>All Menu</option>
                  {
                      foodType.map((t, i) => {
                          return (
                              <option key={i} value={t.id}>{t.name}</option>
                          )
                      })
                  }
              </select>
              {
                  foodByType.length != 0?
                      <div className='menu-cards'>
                          {
                              foodByType.map((c, i) => {
                                  return <MenuItem
                                      key={i}
                                      price={c.price}
                                      type_id={c.name}
                                      ingredients={c.ingredients}
                                      image={c.image}
                                      itemId={c.id}
                                  />
                              })
                          }
                      </div> : <div className='menu-cards'>
                          {
                              foods.map((c, i) => {
                                  return <MenuItem
                                      key={i}
                                      price={c.price}
                                      type_id={c.food_name}
                                      ingredients={c.ingredients}
                                      image={c.image}
                                      itemId={c.id}
                                  />
                              })
                          }
                      </div>
              }
              
          </div>
           
      </div>
  )
}

export default MenuSection




// test


// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getfoodByType, getFoods, getFoodType } from '../../../action/MainAction'
// import MenuItem from './MenuItem'
// import './menuSection.css'
// function MenuSection({foodTypePr}) {
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         dispatch(getFoods())
//         dispatch(getFoodType())
//     },[])

//     const foods=useSelector(state=>state.Data.foods)
//     const foodType=useSelector(state=>state.Data.foodType)
//     const foodByType=useSelector(state=>state.Data.foodByType)

//     const [foodTypeId,setFoodType]=useState(foodTypePr)
//     const [foodId,senFoodId]=useState('')
    
// const [sebet, setSebet] = useState([])


// function addToCart(data) {
//     console.log(data)
//     let arr = [...sebet]
//     let check = arr.find(x => x.id == data.id);
//     console.log(check)
//     if(!check){
//         arr.push({...data})
//     }else{
//         check.count = check.count+1
//     }
//     setSebet(arr)
// console.log('sss',sebet)
// }

//     // console.log(foods);
//     // console.log(foodType);

//     function selectFoodType(e) {
//         dispatch(getfoodByType(e.target.value))
//     }
//   return (
//       <div className='menu-section' id="menu">
//           <h2>OUR MENU</h2>
//           <div className='menu-container'>
//               <select value={foodTypeId} onChange={(e) => selectFoodType(e)}>
//                   {/* <option value={""}>Select a food type</option> */}
//                   {
//                       foodType.map((t, i) => {
//                           return (
//                               <option key={i} value={t.id}>{t.name}</option>
//                           )
//                       })
//                   }
//               </select>
//               {
//                   foodByType.length != 0 ?
//                       <div className='menu-cards'>
//                           {
//                               foodByType.map((data, i) => {
//                                 //   return <MenuItem
//                                 //       key={i}
//                                 //       price={c.price}
//                                 //       type_id={c.name}
//                                 //       ingredients={c.ingredients}
//                                 //       image={c.image}
//                                 //       data={c}
//                                 //   />
//                                 return <div className="menu-item" key={i}>
                                        
//                                         {data.name}
//                                         {data.price}
//                                         <button onClick={()=>addToCart(data)}>Add</button>

//                                     </div>
//                               })
//                           }
//                       </div> : null
//               }
//                     <div style={{width:'400px',height:'400px'}}>
//                         s
//                         {
//               sebet.map((a,i)=>{
//                       <div key={i}>
//                         <p>salam</p>
//                       </div>
//               })
//             }
//                     </div>
//           </div>
//       </div>
//   )
// }

// export default MenuSection