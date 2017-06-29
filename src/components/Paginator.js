import React from 'react';

const Paginator = ({ total, onChangePage }) => {
  const totalPages = Math.ceil(total / 5);
  return (
    <div className="flex-pagination">
      { generatePages(totalPages, onChangePage) }
    </div>
  )
}

function generatePages(totalPages, onChangePage, offset) {
  if(totalPages > 0) {
    let pageItems = [];
    for(let i = 0; i < totalPages; i++) {
      pageItems.push(<div key={i} onClick={() => onChangePage(i)} className="flex-page">{i+1}</div>);
    }
      
    return pageItems;
  }
  return null;
  
}

export default Paginator;