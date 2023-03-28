import React from 'react'

function TabsContent({title,subtitle,text,img}) {
  return (
<div className="content-container">
    <div className="content-container-left">
    <h2>{title}</h2>
   <h3>{subtitle}</h3>
   <p>{text}</p>
    </div>
<div className="content-container-right">
    <img src={img} alt="" />
</div>

</div>

  )
}

export default TabsContent