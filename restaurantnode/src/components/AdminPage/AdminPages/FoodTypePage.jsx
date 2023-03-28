import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodType } from '../../../action/MainAction'
import AdminNav from '../AdminNav'
import FoodTypeModal from '../Modal/FoodtypeModal'
import AddBtn from './AddBtn'
import Card from './Card.jsx'

function FoodTypePage() {
    const oneData=useSelector(state => state.Data.oneData)
    const foodType=useSelector(state=>state.Data.foodType)
    const modalVisible=useSelector(state => state.Data.modalVisible)
  const products=useSelector(state => state.Data.products)
    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getFoodType())
    },[])
    // console.log(foodType);
    // console.log(oneData)
    const getAfterChange=()=>{
        dispatch(getFoodType())
    }
  return (
    
    <>
    <AdminNav/>
    <AddBtn title='Add Food Type'/>
        <div className='admin-container'>
        {
                    foodType.map((data,i)=>{
                        return(
                            <Card
                            key={i}
                            name={data.name}
                            id={data.id}
                            url={`get-one-food-type?id=${data.id}`}
                            getAfterChange={getAfterChange}
                            deleteUrl={`delete-food-type?id=${data.id}`}
                            />

                        )
                    })
                }
        </div>
        {
                modalVisible?
                <FoodTypeModal
                namePr={oneData ==''? '': oneData.name} 
                id={oneData ==''? '': oneData.id}
                // id={products.id}
                getAfterChange={getAfterChange}/>:null

            }
    </>
  )
}

export default FoodTypePage