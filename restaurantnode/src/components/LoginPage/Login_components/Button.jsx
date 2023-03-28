import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { loginUser } from '../../../action/MainAction';


function Button({text,data,url}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    function loginRegisterBtn(e) {
        console.log(url)
        e.preventDefault()
        let permission=true;
        for (const property in data) {
          if (data[property] == '') {
            permission = false
          }
        }
        if (permission) {
         if (url=='login') {
            console.log('salam')
            dispatch(loginUser(data))
            .then(resp=>{
              if (resp=='success') {
                navigate('/admin-page')
                window.location.reload(false);
              }else{
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: 'Invalid '
                })
              }
            })
          }
        }else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'All fields are required.'
          })
        }
      }

    
  return (
    <button class="custom-btn btn-13" onClick={(e)=>loginRegisterBtn(e)}>{text}</button>
  )
}

export default Button