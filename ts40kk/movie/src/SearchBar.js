import React from 'react'

export default function SearchBar({onSearch}) {
  const  [query, setQuery] = React.useState('')
  const handleSearch =()=>{
    onSearch(query)
  }
  return (
    <div className='search'>
      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
