import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { changeStateValue } from '../src/reduxx/MainReducer';
import './Style/style.css'

import { Navigate, Route, Routes } from 'react-router-dom';
import AllPage from './components/AllPage/AllPage';

import LoginPage from './components/LoginPage/LoginPage';
import AdminPage from './components/AdminPage/AdminPage';
import FoodTypePage from './components/AdminPage/AdminPages/FoodTypePage';
import FoodsPage from './components/AdminPage/AdminPages/FoodsPage';
import { useJwt } from "react-jwt";
import ErrorPage from './components/ErrorPage';
import CommentPage from './components/AdminPage/AdminPages/CommentPage';

function App() {
  const [offset, setOffset] = useState(0);
  const nav=useSelector(state=>state.Data.nav)
  const dispatch=useDispatch()
    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
        
    }, []);
 
    const { decodedToken} = useJwt(localStorage.getItem('token'));

    
    if (offset>80) {
      dispatch(
        changeStateValue({
            name: 'nav',
            value: true
        })
    )
    } else{
      dispatch(
        changeStateValue({
            name: 'nav',
            value: false
        })
    )
    }
    // console.log(nav);

    
  return (
    <>  

    {/* <Header/>
    <ScrollToTop/>
    <Main/>
    <Footer/> */}
    <Routes>
    <Route exact path='/' element={<AllPage/>} />
    <Route path='/admin' element={<LoginPage/>}/>
    {
      decodedToken?.userId==2?  
      <>
  <Route path='/admin-page' element={<AdminPage/>}/>
    <Route path='/food-type' element={<FoodTypePage/>}/>
    <Route path='/foods' element={<FoodsPage/>}/>
    <Route path='/comments' element={<CommentPage/>}/>

      </>:<Route path='*' element={<ErrorPage/>}/>

    }:<Route path='*' element={<ErrorPage/>}/>






    </Routes>

    
    </>
  )
}

export default App