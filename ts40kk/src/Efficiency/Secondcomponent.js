import React from 'react'

function Secondcomponent() {
    console.log("second component called")
  return (
    <div>
        <h1>Secondcomponent</h1>
        <h1>Secondcomponent</h1>
    </div>
  )
}
export default React.memo(Secondcomponent)
