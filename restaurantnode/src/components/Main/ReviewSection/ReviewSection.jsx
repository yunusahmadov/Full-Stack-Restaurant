import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getCommentsHighToLow, getCommentsLowToHigh, insertNewData } from '../../../action/MainAction';
import { changeStateValue } from '../../../reduxx/MainReducer';
import Comment from './Comment'
import Input from './Input';
import './Review.css'
function ReviewSection() {

  const getAfterChanges=()=>{
    dispatch(getComments())
    dispatch(getCommentsHighToLow())
    dispatch(getCommentsLowToHigh())
  }
  const [rating,setRating]=useState(0)

  //Updating without refresh
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getComments())
    dispatch(getCommentsHighToLow())
    dispatch(getCommentsLowToHigh())

  },[])
  const comment=useSelector(state=>state.Data.comment)
  const commentHigh=useSelector(state=>state.Data.commentHigh)
  const commentLow=useSelector(state=>state.Data.commentLow)

  

  // console.log(commentHigh);

  
  const test=useSelector(state=>state.Data.test)



  const userComment=useSelector(state=>state.Data.userComment)

  const [displayCount, setDisplayCount] = useState(5);

  //db da olan adlari teze arraya puslayiram
    let arr=[]
    for (const user of comment) {
     arr.push(user.rating)
    }


  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;



  function clearFunction() {
    dispatch(
      changeStateValue({
          name: 'userComment.name',
          value: ''
      })
  )
  dispatch(
    changeStateValue({
        name: 'userComment.coment',
        value: ''
    })
)
rating=0
// dispatch(
//   changeStateValue({
//       name: 'userComment.rating',
//       value: 0
//   })
// )
  }  

//ADD BTN
  function insertBtn() {    
    if (userComment.name!='' && userComment.coment!='' && rating!='' ) {
      // if (newList.includes(userComment.name)==false) {
        const newData={
          name:userComment.name,
          comment:userComment.coment,
          rating:rating
        }
        let url='add-comment'
        let method = "POST"
        dispatch(insertNewData(url,newData, method))
    }
    clearFunction()
    setRating(1)
    getAfterChanges()
  }
  // console.log(commentLow);

  //Burda state yaratdim ki state gore ASC DESC leri deyiwim
  const [ratingState,setRatingState]=useState(commentHigh)
  function sortByHighToLow() {
    setRatingState(commentHigh)
  }
  function sortByLowToHigh() {
    setRatingState(commentLow)
  }
  function sortByDate() {
    setRatingState(comment)
  }
function CheckValue(e) {
  e.target.value == 1 ?sortByDate()  : e.target.value == 2 ? sortByLowToHigh() : sortByHighToLow()
}
// console.log(ratingState);
// console.log(avg);
  return (
    <div className="review-section">
        <div className="review-container">
            <div className="send-com-container">
              <h2>Leave a review</h2>
     <Input placeholder={'Your name'} name="userComment.name" value={userComment.name}/>
     <Input placeholder={'Your Comment'} name="userComment.coment" value={userComment.coment}/>
      <div className="rating-container">
            <div class="rating" onChange={(e)=>(setRating(e.target.value))}>
              <input type="radio" id="star5" name="rating" value="5" />
              <label class="star" for="star5" title="Awesome" aria-hidden="true"></label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label class="star" for="star4" title="Great" aria-hidden="true"></label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label class="star" for="star3" title="Very good" aria-hidden="true"></label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label class="star" for="star2" title="Good" aria-hidden="true"></label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label class="star" for="star1" title="Bad" aria-hidden="true"></label>
            </div>
      </div>
     <button className='saveBtn' onClick={insertBtn}>Save</button>
      <>
      {
        <div className='star-container'>
          <p className='total'>Total:</p>
          {/* <p style={{width:`calc(24.5px*${avg})`}} className='ratestars'>{'★'.repeat(avg+1)}</p> */}
          <p className='ratestars'>{'★'.repeat(avg)}</p>

          {/* <p style={{fontSize:'24px'}}>/</p>
          <p className='greystars'>{'★'.repeat(5)}</p> */}
        </div>
      }
        <div className="sort-buttons">
      <select onChange={(e)=>CheckValue(e)}>
        <option value={1}>By date</option>
        <option value={2}>Low to high</option>
        <option value={3}>High to Low </option>

      </select>
        </div>
      </>
            </div>
            {
              ratingState !=''?
         <>
             {
               ratingState.slice(0, displayCount).map((c, i) => {
                let str='★'
                  return <Comment
                  key={i}
                  name={c.name}
                  comment={c.comment}
                  rating={str.repeat(c.rating)}
                  />
              })
             }
         </>:
          <>
          {
            comment.slice(0, displayCount).map((c, i) => {
             let str='★'
               return <Comment
               key={i}
               name={c.name}
               comment={c.comment}
               rating={str.repeat(c.rating)}
               />
           })
          }
      </>
         

            }
    <div className="show-buttons">
    {
          comment.length > displayCount ?
          <button onClick={() => setDisplayCount(displayCount + 5)}>Show More</button>:null
        }
           {
          displayCount > 5 ?
          <button onClick={() => setDisplayCount(displayCount - 5)}>Show Less</button>:null
        }
    </div>

        </div>
    </div>
  )
}

export default ReviewSection