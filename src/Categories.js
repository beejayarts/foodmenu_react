import React from 'react';

const Categories = ({filterItems, categories}) => {
  return(
    <div className='btn-container'>
      {categories.map((singleCat, index)=>{
        return  <button type='button' className='filter-btn' onClick={()=>filterItems(singleCat)}>{singleCat}</button>
      })}
    </div>
     
      
  )
};

export default Categories;
