import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
function ScrollToTop() {
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
      }, []);
  return (
   <>
      <div onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} className='scrollToTop' style={offset > 300 ? { opacity: '1', width: '40px', height: '40px' } : { opacity: '0', width: '0', height: '0' }}>
        <i
          class="fa-solid fa-chevron-up"></i>
      </div>
   </>
  )
}

export default ScrollToTop