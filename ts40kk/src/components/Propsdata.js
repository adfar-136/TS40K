import React from 'react'

function Propsdata({data,obj}) {
  return (
    <div>
        {data.map((item,index)=>(
            <div key={index}>
                <h1>{item}</h1>
            </div>
        )
        )}
        <p>{obj.start}</p>
    </div>
  )
}

export default Propsdata