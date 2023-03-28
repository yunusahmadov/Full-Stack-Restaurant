import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFoods } from '../../../action/MainAction'
import AdminNav from '../AdminNav'
import FoodModal from '../Modal/FoodModal'
import AddBtn from './AddBtn'
import Card from './Card'
import LogoutBtn from './LogoutBtn'
import Select from './Select'

function FoodsPage() {
  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(getFoods())
  },[])

  const getAfterChange=()=>{
    dispatch(getFoods())
}

  
  const foods=useSelector(state=>state.Data.foods)
  const modalVisible=useSelector(state => state.Data.modalVisible)
  const oneData=useSelector(state => state.Data.oneData)
  const products=useSelector(state => state.Data.products)

  // console.log(oneData);

//   console.log(foods);
//   console.log(products);
  return (
   <>
   <AdminNav/>
   <AddBtn title='Add Foods'/>
   {/* <Select/> */}
   <LogoutBtn/>
   <div className='admin-container'>
        {
                    foods.map((data,i)=>{
                        return(
                            <Card
                            key={i}
                            name={data.food_name}
                            price={data.price}
                            type_id={data.name}
                            ingredients={data.ingredients}
                            image={data.image}
                            id={data.id}
                            url={`get-one-food?id=${data.id}`}
                            getAfterChange={getAfterChange}
                            deleteUrl={`delete-food?id=${data.id}`}
                            />

                        )
                    })
                }
        </div>
        {
                modalVisible?
                <FoodModal
                namePr={oneData ==''? '': oneData.name} 
                pricePr={oneData ==''? '': oneData.price} 
                imagePr={oneData ==''? '': oneData.image} 
                ingredPr={oneData ==''? '': oneData.ingredients} 
                id={products.id}
                getAfterChange={getAfterChange}/>:null

            }
   </>
  )
}

export default FoodsPage