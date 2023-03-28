import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertNewData } from '../../../action/MainAction'
import { changeStateValue } from '../../../reduxx/MainReducer'
import CloseBtn from '../AdminPages/CloseBtn'
import '../../AdminPage/admin.css'
import NewInput from '../../NewInput'

function FoodTypeModal({getAfterChange, namePr, id}) {
    const [name,setName]=useState(namePr)
    const dispatch=useDispatch()
    const products=useSelector(state=>state.Data.products)

    function insertBtn() {
        if (products.name !='') {
            const newData={
                name:products.name,
                id: products.id
            }
            // console.log(newData)
            let formData = new FormData();
            let url ='insert-food-type';
            let method = "POST"
            if(id != ''){
                url=`update-food-type`;
                method = "PUT"
            }
            // console.log(method);
            dispatch(insertNewData(url,newData,formData,method))
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
  return (
    <div className='background_shadow'>
            <div className="modal_body">
                <div className="modal_inp_container">
                <NewInput
                        text={'Type'}  name='products.name' value={products.name}
                />
                </div>
                <div className="modal_btn_container">
                    <CloseBtn/>
                    <button onClick={insertBtn}>Save</button>

                </div>
            </div>
    </div>
  )
}

export default FoodTypeModal



// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { insertNewData } from '../../../action/MainAction'
// import { changeStateValue } from '../../../reduxx/MainReducer'
// import CloseBtn from '../AdminPages/CloseBtn'
// import '../../AdminPage/admin.css'
// import NewInput from '../../NewInput'

// function FoodTypeModal({getAfterChange, namePr, id}) {
//     // const [name,setName]=useState(namePr)
//     const products=useSelector(state=>state.Data.products)
    
//     const dispatch=useDispatch()

//     function insertBtn() {
//         if (products.name !='') {
//             // const newData={
//             //     name
//             // }
//             let formData = new FormData();
//             let method = "POST"
//             let url ='insert-food-type';
//             if(id != '' && products.name!=''){
//                 method = "PUT"
//                 url=`update-food-type?id=${id}`;
//                 // console.log('namepr: ' + name);
//             }
//             // dispatch(insertNewData(url,newData, method))
//             dispatch(insertNewData(url,products,formData, method))
//             .then(resp=>{
//                 dispatch(changeStateValue({
//                     name:'modalVisible',
//                     value:false
//                 }))
//             console.log(method);

//                 getAfterChange()
//             })
//         }
//     }
//   return (
//     <div className='background_shadow'>
//             <div className="modal_body">
//                 <div className="modal_inp_container">
//                 <NewInput
//                         text={'First Name : '}  name='products.name' value={products.name}
//                 />
//                     {/* <input value={products.name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/> */}
//                 </div>
//                 <div className="modal_btn_container">
//                     <CloseBtn/>
//                     <button onClick={insertBtn}>Save</button>

//                 </div>
//             </div>
//     </div>
//   )
// }

// export default FoodTypeModal