import axios from 'axios'
import { api_url } from '../Api/MainApi'
import { changeStateValue } from '../reduxx/MainReducer'


export const getFoodType =()=>async dispacth=>{
    return await axios.get(`${api_url}/get-food-type`)
    .then(resp=>{
        dispacth(changeStateValue({
            name:'foodType',
            value:resp.data
        }))
    }).catch(err=>{
        console.log(err.response);
    })
}

export const getComments =()=>async dispacth=>{
    return await axios.get(`${api_url}/get-comments`)
    .then(resp=>{
        dispacth(changeStateValue({
            name:'comment',
            value:resp.data
        }))
    }).catch(err=>{
        console.log(err.response);
    })
}
export const getCommentsHighToLow =()=>async dispacth=>{
    return await axios.get(`${api_url}/get-comment-high-to-low`)
    .then(resp=>{
        dispacth(changeStateValue({
            name:'commentHigh',
            value:resp.data
        }))
    }).catch(err=>{
        console.log(err.response);
    })
}

export const getCommentsLowToHigh =()=>async dispacth=>{
    return await axios.get(`${api_url}/get-comment-low-to-high`)
    .then(resp=>{
        dispacth(changeStateValue({
            name:'commentLow',
            value:resp.data
        }))
    }).catch(err=>{
        console.log(err.response);
    })
}

export const getFoods=()=>async dispatch =>{
    return await axios.get(`${api_url}/get-food`)
    .then(resp=>{
        dispatch(changeStateValue({
            name:'foods',
            value:resp.data
        }))
    }).catch(err=>{
        console.log(err.response);
    }) 
}


export const getfoodByType=(id)=>async dispatch =>{
    return await axios.get(`${api_url}/get-food-by-type?type_id=${id}`)
    .then(resp=>{
        dispatch(changeStateValue({
            name:'foodByType',
            value:resp.data
        }))
    })
    .catch(err=>{
        console.log(err.response);
    })
}
// export const insertNewData = (url,formData, method)=>async dispatch=>{
//     return await axios({
//         method: method,
//         url:`${api_url}/${url}`,
//         // data: formData,
//         params: formData,
//         headers:{
//             "Content-Type":'multipart/form-data',
//             // "Authorization": `Bearer ${localStorage.getItem('cart')}`,
//         }
//     }).then(resp=>{
//         dispatch(changeStateValue({
//             name: "oneData",
//             value: ''
//         }))
//         return  "success"
//     }).catch(err=>{
//         return "error"
//     })
// }

export const insertNewData = (url,params,formData,method="POST")=>async dispatch=>{
    return await axios({
        method: method,
        url:`${api_url}/${url}`,
        data: formData,
        params: params,
        headers:{
            "Content-Type":'multipart/form-data',
        }
    }).then(resp=>{
        dispatch(changeStateValue({
            name: "oneData",
            value: ''
        }))
        
        return  "success"
    }).catch(err=>{
        return "error"
    })
}

export const deleteData = (url)=>async dispatch =>{
    return await axios({
        method: "DELETE",
        url:`${api_url}/${url}`,
    }).then(resp=>{
        return  "success"
    }).catch(err=>{
        return "error"
    })
}


export const getOneData=(url)=>async dispatch =>{
    return await axios.get(`${api_url}/${url}`)
    .then(resp=>{
        dispatch(changeStateValue({
            name:'oneData',
            value:resp.data
        }))
        dispatch(changeStateValue({
            name:'products',
            value:resp.data
        }))
        return "success"
    }).catch(err=>{
        console.log(err.response);
        return "error"
    })
}

//login

export const loginUser=(data)=>async dispatch=>{
    return await axios({
        url: `${api_url}/login`,
        params:data,
        method: "POST"
    })
    .then(resp=>{
        console.log(resp.data)
        dispatch({type: 'MAIN_SLICE/changeStateValue',
        payload:{name:'user',value:resp.data.user}
    })
    localStorage.setItem('token',resp.data.token)
    return 'success'
    }).catch(err=>console.log(err.response))
}

