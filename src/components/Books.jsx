import React from 'react'

const Books = () => {
  return (
    <div className='fs-6'>
        <div className='d-flex justify-content-center'>
            Deal of the day
        </div>
        <div className='p-3 col-2'>
            <div className='d-flex flex-column position-relative' style={{fontSize: '80%'}}>
                <span> <img src="https://cdn.shopify.com/s/files/1/0302/6927/6291/files/03-_1.png?v=1702465051" style={{position:'relative'}} alt="" /> <span style={{position:'relative'}}>Gently Used</span></span>
                <span>52%</span>
            </div>
            <div className='d-flex justify-content-center'>
            <img src="https://kitabay.com/cdn/shop/products/db28f2558c458f85f56b2886e1908ffd_3a5a354f-b335-44c3-9ddb-f65a1d75eab2.jpg?crop=center&height=400&v=1710917345&width=250"/>

            </div>
            <div className='d-flex p-2 flex-column'>
                <span>14th Deadly Sin (Women...</span>
                <span>by James Patterson</span>
                <div><span className='text-decoration-line-through'>Rs. 499</span><span> Rs. 250</span></div>
            </div>
        </div>
    </div>

    
  )
}

export default Books
