// import React, { useState } from 'react'
// import OfferCard from './OfferCArd';
// import './OffersSection.css'
// function OffersSection() {
//     const [cheese,setCheese]=useState(false);
//     const [brus,setBrus]=useState(false);
//     const [vegetab,setVegetab]=useState(false);
//     const [tasty,setTasty]=useState(false);
//     const [best,setBest]=useState(false);



//     function openCheese() {
//         setCheese(true)
//         setBrus(false)
//         setVegetab(false)
//         setTasty(false)
//         setBest(false)
//     }
//     function openBrus() {
//         setBrus(true)
//         setVegetab(false)
//         setTasty(false)
//         setBest(false)
//         setCheese(false)
//     }
//     function openVeget() {
//         setVegetab(true)
//         setTasty(false)
//         setBest(false)
//         setCheese(false)
//         setBrus(false)
//     }
//     function openTasty() {
//         setTasty(true)
//         setBest(false)
//         setCheese(false)
//         setBrus(false)
//         setVegetab(false)

//     }
//     function openBest() {
//         setBest(true)
//         setCheese(false)
//         setBrus(false)
//         setVegetab(false)
//         setTasty(false)

//     }
//     console.log('chese',cheese);
//     console.log('brus',brus);
//     console.log('veget',vegetab);
//     console.log('tasty',tasty);
//     console.log('best',best);


//   return (

//     <section className='offers-section'>
//         <div className="offer-container">
//             <div className="offer-container-left">
//                 <p onClick={()=>openCheese()}>CHEESE CROISSANTS</p>
//                 <p onClick={()=>openBrus()}>BRUSCHETTI</p>
//                 <p onClick={()=>openVeget()}>AWESOME VEGETABLES</p>
//                 <p onClick={()=>openTasty()}>TASTY SNACKS</p>
//                 <p onClick={()=>openBest()}>ALL-TIME BEST RECIPES</p>
//             </div>
//             <div className="offer-container-right" >
//                   <div className="offer-card" style={cheese? {visibility:'visible'}:{visibility:'hidden'}}>
//                       <h2>TODAY’S BEST OFFER</h2>
//                       <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h3>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
//                 </div>
//                 <div className="offer-card" style={brus? {display:'flex'}:{display:'none'}}>
//                       <h2>Salam</h2>
//                       <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h3>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
//                 </div>

//             </div>
//         </div>
//     </section>
//   )
// }

// export default OffersSection