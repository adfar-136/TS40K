import React from 'react'

export default function Sectionlayout({children,adfar,mohit}) {
    var condition = false
  return (
    <div>
        {children}
        {condition ? adfar : mohit}
    </div>
  )
}
