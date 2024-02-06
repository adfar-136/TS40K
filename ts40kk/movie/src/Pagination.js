import React from 'react'

export default function Pagination({currentPage,totalPages,onPageChange}) {
    // console.log(totalPages)
    // const pageNumbers = []
    // for(let i=0;i<totalPages;i++){
    //     pageNumbers.push(i)
    // }
    console.log(currentPage)
    const maxButtons=10;
    const calculateButtonRange =()=>{
        const halfMaxButtons = Math.floor(maxButtons/2);
        let start = currentPage - halfMaxButtons;
        let end = currentPage+halfMaxButtons;
        if(start < 1){
            start = 1;
            end = start + maxButtons -1 ;
        }
        if(end > totalPages){
            end = totalPages;
            start = end - maxButtons + 1;
            if(start <1){
                start =1;
            }
        }
        return {start,end}
    }
   const {start,end}= calculateButtonRange();
   console.log(start,end)
   const pageNumbers = Array.from({length:end-start+1},(_,index)=>start+index);
//    console.log(pageNumbers)
  return (
    <div className='pagination'>
        <button onClick={()=>onPageChange(currentPage-1)}>Previous</button>
        {pageNumbers.map((page)=>(
            <button onClick={()=>onPageChange(page) } disabled={currentPage===page}>{page}</button>
        ))}
        <button onClick={()=>onPageChange(currentPage+1)}>Next</button>
    </div>
  )
}
