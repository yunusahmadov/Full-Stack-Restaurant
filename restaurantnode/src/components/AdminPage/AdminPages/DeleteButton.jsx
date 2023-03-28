// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { deleteData } from '../../../action/MainAction'
// import CloseBtn from './CloseBtn'

// function DeleteButton({deleteName,getAfterChange,deleteUrl}) {
//     const dispatch=useDispatch()
//     function deleteDataBtn(url) {
//         dispatch(deleteData(url))
//         .then(resp=>{
//             getAfterChange()
//         })
//     }
//   return (
//     <div className='background_shadow'>
//     <div className="modal_body">
//         <div className="modal_inp_container">
//             Are you sure to delete:{deleteName}
//         </div>
//         <div className="modal_btn_container">
//             <CloseBtn/>
//             <button onClick={()=>deleteDataBtn(deleteUrl)}>Delete</button>
            

//         </div>
//     </div>
// </div>
//   )
// }

// export default DeleteButton