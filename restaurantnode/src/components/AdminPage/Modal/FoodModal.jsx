import React, { useEffect, useState,useCallback  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFoodType, insertNewData } from '../../../action/MainAction'
import { img_path } from '../../../Api/MainApi'
import { changeStateValue } from '../../../reduxx/MainReducer'
import NewInput from '../../NewInput'
import CloseBtn from '../AdminPages/CloseBtn'
// import { useDropzone } from 'react-dropzone';



function FoodModal({getAfterChange, id,namePr}) {
    const products=useSelector(state=>state.Data.products)
    useEffect(()=>{
        dispatch(getFoodType())
    }, [])

    const foodType =useSelector(state=>state.Data.foodType)
    const food =useSelector(state=>state.Data.food)

    const dispatch=useDispatch()

    function insertBtn() {
        // console.log("ddd", products)

        if (products.name !='' && products.price !='' && products.type_id !='') {
            let formData = new FormData();
            formData.append('image', products.image)
            let url ='insert-food';
            let method = "POST"
            if(id != '' && products.image !='' ){
                url=`update-food`;
                method = "PUT"
                // console.log('salam');
            }
            // console.log(method);
            dispatch(insertNewData(url,products,formData, method))
            .then(resp=>{
                dispatch(changeStateValue({
                    name:'modalVisible',
                    value:false
                }))
                getAfterChange()
                window.location.reload(false);
            })
        }
    }

    function getProductImage(e){
        
        dispatch(changeStateValue({
          name:'products.image',
          value:e.target.files[0]
        }))
      }    
    function getSelectValue(e) {
        dispatch(changeStateValue({
          name:e.target.name,
          value:e.target.value
        }))
      }
console.log(products.image)
  return (
        <div className='background_shadow'>
            <div className="modal_body">
                <div className="modal_inp_container">
                <select value={products.type_id} name="products.type_id" onChange={(e)=>getSelectValue(e)}> 
                    <option value={""}>Select a food type</option>
                    {
                        foodType.map((ft,i)=>{
                            return(
                                <option key={i} value={ft.id} >{ft.name}</option>
                            )
                        })
                    }
                </select>
                <div className="modal_inp_container">
                <NewInput
                      type="text"  text={'First Name : '}  name='products.name' value={products.name}
                />
                </div>
                  <div className="modal_inp_container">
                  <NewInput
                      type="number"  text={'Price : '}  name='products.price' value={products.price}
                />
                </div>
                <div className="modal_inp_container">
                <NewInput
                    type="text"    text={'Ingredients: '}  name='products.ingredients' value={products.ingredients}
                />
                </div>
                <div className="modal_inp_container">

                <label htmlFor="actual-btn">Choose File</label>
          <input hidden id="actual-btn" title="asd" type={'file'} accept="image/*" name="image" onChange={(e)=>getProductImage(e)} />
          {/* <img src={img_path+products.image} alt="" style={{height:'100px',width:'100px'}} /> */}
                </div>
                </div>
                <div className="modal_btn_container">
                    <CloseBtn/>
                    <button onClick={insertBtn}>Save</button>

                </div>
            </div>
    </div>
  )
}

export default FoodModal